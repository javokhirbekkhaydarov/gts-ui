<script setup lang="ts">
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import { computed, useId } from 'vue'
import FloatLabel from 'primevue/floatlabel'
import './EasyInput.scss'
import EasyLoader from '@/components/loader/EasyLoader.vue'

const model = defineModel<string>({ default: '' })
const props = withDefaults(
  defineProps<{
    label?: string
    placeholder?: string
    tabindex?: number
    readonly?: boolean
    invalid?: boolean
    size?: 'small' | 'large'
    type?: 'text' | 'password' | 'mask'
    mask?: string
    uppercase?: boolean
    copyButton?: boolean
    disabled?: boolean
    loading?: boolean
    prefixIcon?: string
  }>(),
  {
    size: 'large',
    type: 'text',
  },
)

const activeComponent = computed(() => {
  if (props.type === 'password') {
    return Password
  } else if (props.type === 'mask') {
    return InputMask
  }
  return InputText
})

const emit = defineEmits<{
  (e: 'keydown.down', val?: string): void
  (e: 'keydown.up', val?: string): void
  (e: 'keydown.enter', val?: string): void
  (e: 'keydown.tab', val?: string): void
  (e: 'focus', val?: string): void
  (e: 'focusout', val?: string): void
}>()

const id = useId()

const uppercaseModel = computed({
  get() {
    return props.uppercase ? model.value?.toUpperCase() : model.value
  },
  set(val: string) {
    model.value = val
  },
})
</script>

<template>
  <FloatLabel :class="['easy-input w-full', size, { 'has-label': label, disabled, 'has-prefix': prefixIcon }]">
    <component
      :is="activeComponent"
      :id="id"
      v-model="uppercaseModel"
      :placeholder="placeholder"
      :class="{ 'p-invalid': invalid, 'has-prefix': prefixIcon }"
      :upperCase="uppercase"
      toggleMask
      :feedback="false"
      :tabindex="tabindex"
      :readonly="readonly"
      autocomplete="off"
      :mask="mask"
      :disabled="disabled"
      :loading
      @keydown.down="emit('keydown.down')"
      @keydown.up="emit('keydown.up')"
      @keydown.enter="emit('keydown.enter')"
      @keydown.tab="emit('keydown.tab')"
      @focus="emit('focus')"
      @focusout="emit('focusout')"
    />

    <div v-if="loading" class="loading">
      <EasyLoader :size="20" :borderWidth="2" />
    </div>

    <label v-if="label" :for="id">
      {{ label }}
    </label>

    <div v-if="prefixIcon" class="prefix">
      <i :class="[prefixIcon.startsWith('icon-') ? prefixIcon : 'icon-' + prefixIcon]"></i>
    </div>
  </FloatLabel>
</template>
