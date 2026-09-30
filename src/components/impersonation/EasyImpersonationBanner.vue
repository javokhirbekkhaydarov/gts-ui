<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, Ref, ref, watch } from 'vue'
import { useImpersonation } from '@/composables/useImpersonation'
import { goToImpersonationEnded } from '@/utils/impersonation'
import { lang } from '@/constants/lang'
import { LocaleTypes } from '@/types'

const props = defineProps<{ baseUrl?: string }>()

const locale = inject<Ref<LocaleTypes>>('locale', ref('ru'))
const t = computed(() => (lang[locale.value] ?? lang.ru).impersonation)

const { context, exit, verify } = useImpersonation(props.baseUrl)
const now = ref(Date.now())
const timer = window.setInterval(() => {
  now.value = Date.now()
}, 1000)
onBeforeUnmount(() => window.clearInterval(timer))

const remainingSeconds = computed(() => {
  const expires = new Date(context.value?.expires_at || 0).getTime()
  return Math.max(0, Math.ceil((expires - now.value) / 1000))
})
const remaining = computed(() => {
  const seconds = remainingSeconds.value
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
  return `${minutes}:${String(seconds % 60).padStart(2, '0')}`
})

let expirationHandled = false
watch(remainingSeconds, async (seconds) => {
  if (seconds !== 0 || expirationHandled) return
  expirationHandled = true
  await verify()
  goToImpersonationEnded()
})
</script>

<template>
  <aside class="impersonation-banner" role="status">
    <div class="impersonation-banner__message">
      <strong>{{ t.title }}:</strong>
      <span>{{ context?.target?.company || context?.target?.email }}</span>
      <span class="impersonation-banner__actor">CP: {{ context?.actor?.email }}</span>
      <span v-if="context?.reason" class="impersonation-banner__reason">{{ t.reason }}: {{ context.reason }}</span>
    </div>
    <div class="impersonation-banner__actions">
      <span>{{ t.remaining }} {{ remaining }}</span>
      <button type="button" @click="exit">{{ t.exit }}</button>
    </div>
  </aside>
</template>

<style>
.impersonation-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--impersonation-banner-height, 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 24px;
  box-sizing: border-box;
  color: #4b3710;
  background: #fff3cd;
  border-bottom: 1px solid #f0cf70;
  font-size: 13px;
}

.impersonation-banner__message,
.impersonation-banner__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.impersonation-banner__actor,
.impersonation-banner__reason {
  padding-left: 10px;
  border-left: 1px solid #d6b95e;
}

.impersonation-banner__reason {
  max-width: 420px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.impersonation-banner button {
  border: 1px solid #8b681d;
  border-radius: 8px;
  padding: 6px 12px;
  background: transparent;
  color: inherit;
  font-weight: 700;
  cursor: pointer;
}
</style>
