import { computed } from 'vue'
import { ISidebarItem } from '@/types/ui'
import { sidebarItems } from '@/constants/sidebar'

export const usePermission = () => {

  const apiList = localStorage.getItem('apis')
  const userType = localStorage.getItem('userType') ?? 'AGENT'

  const definePermission = (code: string) => {
    if (code === 'home') return true
    return apiList && apiList?.includes(code)
  }

  const filterRoutes = (routes: ISidebarItem[]): ISidebarItem[] => {
    return routes.filter((el) => {
      if (el?.children?.length) {
        el.children = filterRoutes(el.children)
        return !!el.children?.length
      }

      if (el.code === 'home') {
        return true
      }
      return apiList?.includes(el.code)
    }).map(el => {
      if (el?.children?.length === 1) {
        el.path = el.children[0].path
        delete el.children
      }
      return el
    })
  }

  const availableRoutes = computed(() => {
    console.log(userType)
    if (userType === 'AGENT') {
      console.log(sidebarItems)
      return sidebarItems
    }
    return filterRoutes(sidebarItems)
  })

  function getFirstAvailablePage() {
    try {
      const route = availableRoutes.value[0]
      if (route?.children?.length) {
        return route?.children[0].path
      }
      return route.path
    } catch (e) {
      console.log(e)
      return '/home'
    }
  }

  function hasAccessAction(permissions: string[]) {
    try {
      if (userType === 'AGENT') {
        return true
      } else {
        return permissions.every(el => apiList?.includes(el))
      }
    } catch (e) {
      console.log(e)
      return false
    }
  }

  return {
    definePermission,
    availableRoutes,
    getFirstAvailablePage,
    hasAccessAction
  }
}
