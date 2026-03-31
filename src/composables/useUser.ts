import {ref} from 'vue'
import {IUser} from '@/types/user'
import {catcher} from '@/utils/catcher'
import {useFetch} from './useFetch'
import {IResponse} from '@/types'

export const useUser = (baseUrl?: string) => {
  const {get} = useFetch({baseUrl})

  const user = ref<IUser>()

  const fetchUser = catcher(async () => {
    const userType = localStorage.getItem('userType')

    if (userType === 'STAFF') {
      const id = localStorage.getItem('uid')
      const {data} = await get<IResponse<{ staff: IUser }>>(`/v1/users/employee/${id}`)
      user.value = data.staff

      const currentCurrency = data.staff?.parent?.currency?.code
      if (currentCurrency) {
        localStorage.setItem('currentUserCurrency', currentCurrency)
      }

    } else {
      const {data} = await get<IResponse<IUser>>('/v1/users/agent/')
      user.value = data

      if (data?.currency?.code) {
        localStorage.setItem('currentUserCurrency', data.currency.code)
      }
    }
  })

  const getLogo = catcher(async () => {
    const {data} = await get<IResponse<{ logo: string, mini_logo: string }>>('/v1/settings/general/logo/')
    return data
  })

  const getUserData = async () => {
    await fetchUser()
    return user.value
  }

  return {
    getUserData,
    user,
    getLogo
  }
}
