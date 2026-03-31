<script setup lang="ts">
import Textarea from 'primevue/textarea'
import './EasyTextarea.scss'

const model = defineModel<string>({ default: '' })

defineProps<{
  placeholder?: string
  tabindex?: number
  invalid?: boolean
  rows?: number
  disabled?: boolean
  readonly?: boolean
}>()
const emit = defineEmits<{
  (e: 'keydown.down', val: string): void
  (e: 'keydown.up', val: string): void
  (e: 'keydown.enter', val: string): void
  (e: 'keydown.tab', val: string): void
  (e: 'focus', val: string): void
  (e: 'focusout', val: string): void
}>()
</script>

<template>
  <Textarea
    v-model="model"
    :rows="rows"
    auto-resize
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    class="w-full easy-textarea"
    :tabindex="tabindex"
    :invalid="invalid"
    @keydown.down="emit('keydown.down', model)"
    @keydown.up="emit('keydown.up', model)"
    @keydown.enter="emit('keydown.enter', model)"
    @keydown.tab="emit('keydown.tab', model)"
    @focus="emit('focus', model)"
    @focusout="emit('focusout', model)"
  />
</template>

<style lang="scss"></style>
