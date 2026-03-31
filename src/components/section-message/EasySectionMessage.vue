<script setup lang="ts">
import './EasySectionMessage.scss'
import EasyIcon from "@/components/icon/EasyIcon.vue";

interface IProps {
  title: string
  description?: string
  type?: 'information' | 'success' | 'warning' | 'error' | 'discovery'
}

const icons:Record<string, string> = {
  information: 'icon-Bold-InfoCircle',
  success: 'icon-Bold-check-circle',
  warning: 'icon-Bold-Danger',
  error: 'icon-Bold-InfoCircle',
  discovery: 'icon-Bold-help-circle'
}

withDefaults(defineProps<IProps>(), {
  type: 'information'
});
</script>

<template>
  <div class="section" :class="`section-${type}`">
    <EasyIcon
      :name="icons[type]"
      class="section-icon" :size="20"/>
    <div class="section-main">
      <h5 class="section-main-title">{{title}}</h5>
      <p v-if="description" class="section-main-desc">{{description}}</p>
      <p v-else class="section-main-desc">
        <slot />
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
