<script lang="ts" setup>
import { computed, ComputedRef, inject, Ref, ref, watchEffect } from 'vue'
import NavigationSidebarItem from './NavigationSidebarItem.vue'
import ScrollPanel from 'primevue/scrollpanel'
import { ISidebarItem } from '@/types/ui'
import './NavigationSidebar.css'
import { lang } from '@/constants/lang'
import { LocaleTypes } from '@/types'
import { usePermission } from '@/composables/usePermission'
import { useUser } from '@/composables/useUser'
import Skeleton from 'primevue/skeleton'

const dipLogo = 'https://api.globaltravel.space/media/imgs/logo/dip-logo.png'
const logo = 'https://api.globaltravel.space/media/imgs/logo/logo.svg'
const shortLogo = 'https://api.globaltravel.space/media/imgs/logo/short-logo.svg'
const darkModeLogo = 'https://api.globaltravel.space/media/imgs/logo/dark-logo.svg'

const props = withDefaults(
  defineProps<{
    baseRoute?: string
    isDark?: boolean
    routeName: string
  }>(),
  {
    baseRoute: '/home',
  },
)

const short = defineModel<boolean>('short', { default: false })

const {getLogo} = useUser()
const permissions = usePermission()
const locale = inject<Ref<LocaleTypes>>('locale', ref('ru'))

const isDipavia = window.location.href.includes('dipavia.uz')

const parentRoute = ref(false)
const fullLogoCustom = ref('')
const shortLogoCustom = ref('')
const logoLoading = ref(true)

const injectedBaseUrl = inject<ComputedRef<string>>('baseUrl')

const translatedRoutes = computed(() => {
  const addTranslate = (arr: ISidebarItem[]) => {
    return arr.map((item) => {
      item.label = lang[locale.value]?.sidebar[item.label]

      if ('children' in item && item.children?.length) {
        addTranslate(item.children)
      }

      return item
    })
  }

  return addTranslate(permissions.availableRoutes.value)
})

const routes = ref(translatedRoutes.value || [])
const childrenRoutes = ref<ISidebarItem[]>([])

const appLogo = computed(() => {
  if (short.value) {
    return shortLogoCustom.value || shortLogo
  }
  if (fullLogoCustom.value) {
    return fullLogoCustom.value
  }
  return props.isDark ? darkModeLogo : logo
})

const logOut = () => {
  window.location.replace('/sign-in')
}

getLogo().then((res) => {
  if (res && injectedBaseUrl) {
    fullLogoCustom.value = injectedBaseUrl.value + res.logo
    shortLogoCustom.value = injectedBaseUrl.value + res.mini_logo
  }
}).catch((error) => {
  console.error('Failed to load custom logo:', error)
}).finally(() => {
  logoLoading.value = false
})


watchEffect(() => {
  const found = routes.value.find((el) => {
    return el.pages?.includes(props.routeName)
  })
  if (found?.children && !short.value) {
    parentRoute.value = true
    routes.value = found.children
  } else {
    parentRoute.value = false
    routes.value = translatedRoutes.value
  }
})
</script>

<template>
  <aside :class="['navigation-sidebar', { short }]">
    <section class="navigation-sidebar__header">
      <a :href="baseRoute">
        <div v-if="logoLoading">
          <Skeleton height="43px" :width="`${short ? '43px' : '150px'}`" />
        </div>
        <img v-else-if="isDipavia" :src="dipLogo" alt="" class="navigation-sidebar__logo" />
        <img v-else :src="appLogo" alt="" class="navigation-sidebar__logo" />
      </a>

      <i class="icon-Outline-Arrow-LeftSquare toggle text-dark" @click="short = !short"></i>
    </section>

    <ScrollPanel class="scroll-height">
      <section class="navigation-sidebar__body">
        <div
          v-if="parentRoute && !short"
          @click="childrenRoutes = translatedRoutes; parentRoute = false"
          class="navigation-sidebar__link disable"
          style="cursor: pointer"
        >
          <i class="icon-Outline-Arrow-LeftCircle navigation-sidebar__icon text-text-subtle"></i>
          <span class="text-text-subtle" v-if="!short">{{ lang[locale].sidebar.back }}</span>
        </div>

        <div v-else class="navigation-sidebar__link disable text-text-subtle">
          {{ lang[locale].sidebar.title }}
        </div>

        <template v-if="childrenRoutes.length">
          <NavigationSidebarItem
            v-for="(routeItem, i) of childrenRoutes"
            :key="`${i}-${routeItem.path}`"
            :route-item="routeItem"
            :is-child="false"
            :routeName="routeName"
            @parent-click="childrenRoutes = $event; parentRoute = true"
            :short
          />
        </template>

        <template v-else>
          <NavigationSidebarItem
            v-for="(routeItem, i) of routes" :key="`${i}-${routeItem.path}`"
            :route-item="routeItem"
            :routeName="routeName"
            :is-child="false"
            @parent-click="childrenRoutes = $event; parentRoute = true"
            :short
          />
        </template>
      </section>

      <section class="navigation-sidebar__footer">
        <div
          class="navigation-sidebar__link"
          v-tooltip="{ value: lang[locale]?.sidebar.logout, disabled: !short }"
          @click="logOut"
        >
          <i class="icon-Outline-Logout"></i>
          <span v-if="!short">{{ lang[locale].sidebar.logout }}</span>
        </div>
      </section>
    </ScrollPanel>
  </aside>
</template>

<style lang="scss"></style>
