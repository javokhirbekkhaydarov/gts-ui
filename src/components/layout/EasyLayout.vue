<script lang="ts" setup>
import EasyBackground from '../background/EasyBackground.vue'
import NavigationSidebar from '../sidebar/NavigationSidebar.vue'
import {useWindowSize} from '@/composables/useWindowSize'
import {ref, watch, provide, computed} from 'vue'
import {LocaleTypes, EnvTypes} from '@/types'

const props = defineProps<{
  routeName: string
  isDark?: boolean
  locale: LocaleTypes
  baseUrl?: string
  env?: EnvTypes
  isContract?: boolean
}>()

const {width} = useWindowSize()

provide('locale', computed(() => props.locale))
provide('baseUrl', computed(() => props.baseUrl || 'https://api.globaltravel.space'))
provide('env', computed(() => props.env || 'production'))
provide('isContract', computed(() => props.isContract))

const short = ref(false)
const logoBaseUrl = `https://api.globaltravel.space/media/imgs/footer`

function sidebarToggle() {
  if (width.value < 1420 && !short.value) {
    short.value = true
  } else if (width.value >= 1420 && short.value) {
    short.value = false
  }
}

sidebarToggle()

watch(width, () => {
  sidebarToggle()
})
</script>

<template>
  <div :class="['easy-layout', { short }]">
    <EasyBackground/>

    <NavigationSidebar v-model:short="short" :routeName :isDark/>

    <div class="easy-layout__content">
      <div class="easy-layout__header">
        <slot name="header"></slot>
      </div>
      <div class="easy-layout__scrollbar scrollbar">
        <div class="easy-layout__body">
          <div class="easy-layout__body-inner">

            <slot></slot>

          </div>
        </div>

        <!-- <div class="easy-layout__footer">
          <div class="partners-logo">
            <img :src="`${logoBaseUrl}/${isDark ? 'dark' : 'light'}/iata-logo.svg`" alt="iata"/>
            <img :src="`${logoBaseUrl}/${isDark ? 'dark' : 'light'}/tcp-logo.svg`" alt="iata"/>
            <img :src="`${logoBaseUrl}/${isDark ? 'dark' : 'light'}/payments.svg`" alt="iata"/>
          </div>

          <div class="copyright">© Globaltravel.space | All rights reserved</div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<style>
.easy-layout {
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;

  --sidebar-width: 248px;
}

.easy-layout.short {
  --sidebar-width: 90px;
}

.easy-layout__content {
  width: calc(100% - var(--sidebar-width));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  box-sizing: border-box;
  padding-right: 8px;
}

.easy-layout__header {
  height: 64px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
  padding-right: 8px;
}

.easy-layout__footer {
  height: 56px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  box-sizing: border-box;
  justify-content: space-between;
}

.easy-layout__footer .partners-logo {
  display: flex;
  gap: 12px;
}

.easy-layout__footer .partners-logo img {
  height: 24px;
}

.easy-layout__body {
  flex: 1;
  min-height: calc(100vh - 125px);
}

.easy-layout__body-inner {
  border: 1px solid #ffffff;
  border-radius: 16px;
  padding: 8px 5px 8px 8px;
  box-sizing: border-box;
  height: 100%;
  background: #ffffff59;
}

.easy-layout__scrollbar {
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  padding-right: 4px;
}

.dark-mode .easy-layout__body-inner {
  background: #0C111D66;
  border: 1px solid #ffffff33;
}

.easy-layout .copyright {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-subtle);
}
</style>
