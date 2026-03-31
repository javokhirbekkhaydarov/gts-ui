<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import './EasyRadiobutton.scss'

defineProps<{
  name: string
  value: string | number | object
  label?: string
  small?: boolean
  disabled?: boolean
  text?: string
  block?: boolean
}>()

const model = defineModel()

</script>

<template>
  <label :class="['easy-radiobutton', { small, block, active: model === value }]">
    <RadioButton
      v-model="model"
      :name="name"
      :value="value"
      :disabled
    />
    <span v-if="label || text" :class="['easy-radiobutton__label pointer']">
      <template v-if="!$slots.default">
        <span v-if="label" class="easy-radiobutton__title">{{ label }}</span>
        <span v-if="text" class="easy-radiobutton__description">
          {{ text }}
        </span>
      </template>
      <slot />
    </span>
  </label>
</template>

<style scoped lang="scss">
</style>
