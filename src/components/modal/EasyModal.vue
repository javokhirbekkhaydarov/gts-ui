<script setup lang="ts">
import Dialog from 'primevue/dialog'
import './EasyModal.scss'

const emit = defineEmits(['close'])

const model = defineModel<boolean>({ default: false })

const { maxWidth, noScroll = false, dismissableMask = true, showHeader = true } = defineProps<{
  maxWidth?: string
  title?: string
  backgroundColor?: string
  hideClose?: boolean
  noScroll?: boolean
  showHeader?: boolean
  maximizable?: boolean
  dismissableMask?: boolean
}>()

</script>

<template>
  <Dialog
    v-model:visible="model"
    modal
    :class="['easy-modal', { 'no-scroll': noScroll }]"
    draggable
    :style="{ maxWidth, backgroundColor }"
    :closable="false"
    :maximizable="maximizable"
    :dismissable-mask="dismissableMask"
    :show-header="showHeader"
    :header="title"
    @hide="emit('close')"
  >
    <div v-if="!hideClose" class="close center pointer" @click="model = false">
      <i class="icon-Outline-Close_SM"></i>
    </div>
    <template #header>
      <slot name="header" />
    </template>
    <slot />
    <template v-if="$slots?.footer" #footer>
      <slot name="footer" /> 
    </template>
  </Dialog>
</template>
