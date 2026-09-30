import { computed, ref } from 'vue'
import { IResponse } from '@/types'
import { useFetch } from './useFetch'
import {
  ImpersonationContext,
  endImpersonationSession,
  getImpersonationAuth,
  getImpersonationContext,
  goToImpersonationEnded,
  isImpersonating,
} from '@/utils/impersonation'

const context = ref<ImpersonationContext | null>(getImpersonationContext())

export const useImpersonation = (baseUrl?: string) => {
  const { get, post } = useFetch({ baseUrl })

  const active = computed(() => Boolean(context.value?.active && isImpersonating()))

  async function verify() {
    if (!getImpersonationAuth()) {
      context.value = null
      return false
    }
    try {
      const { data } = await get<IResponse<ImpersonationContext>>('/v1/auth/impersonation/status/')
      context.value = data || null
      if (!context.value?.active) {
        endImpersonationSession()
        goToImpersonationEnded()
        return false
      }
      return true
    } catch {
      endImpersonationSession()
      context.value = null
      return false
    }
  }

  async function exit() {
    try {
      if (getImpersonationAuth()) await post('/v1/auth/logout/', {})
    } finally {
      endImpersonationSession()
      context.value = null
      goToImpersonationEnded()
    }
  }

  return { active, context, verify, exit }
}
