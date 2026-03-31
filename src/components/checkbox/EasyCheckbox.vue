<script setup lang="ts">
import Checkbox from 'primevue/checkbox'
import {useId} from 'vue'
import './EasyCheckbox.scss'

defineProps<{
  name?: string
  label?: string
  text?: string
  value?: string | boolean| object
  binary?: boolean
  disabled?: boolean
  small?: boolean
}>()

const model = defineModel()

const id = useId()

</script>

<template>
  <div :class="['easy-checkbox', { small }]">
    <Checkbox
      v-model="model"
      :inputId="id"
      :binary="binary"
      :name="name"
      :value="value"
      :disabled="disabled"
    />
    <label :for="id" :class="['easy-checkbox__label pointer' , { disabled }]">
      <template v-if="!$slots.default">
        <span class="easy-checkbox__title">{{ label }}</span>
        <span v-if="text" class="easy-checkbox__description">
          {{ text }}
        </span>
      </template>
      <slot />
    </label>
  </div>
</template>

<style scoped lang="scss">

</style>
