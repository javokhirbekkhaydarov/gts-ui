<script setup lang="ts">
import { inject, useId } from 'vue'
import type { IItem } from 'src/types/ui'
import { useClickOutside } from '../../composables/useClickOutside'
import { computed, ref } from 'vue'
import './EasySelect.scss'
import Dropdown from 'primevue/dropdown'
import FloatLabel from 'primevue/floatlabel'
import EasyLoader from '@/components/loader/EasyLoader.vue'
import { LocaleTypes } from '@/types'
import { lang } from '@/constants/lang'

const props = withDefaults(
  defineProps<{
    options: IItem[]
    label?: string
    size?: 'small' | 'large'
    invalid?: boolean
    filter?: boolean
    disabled?: boolean
    optionValue?: string
    optionLabel?: string
    loading?: boolean
    placeholder?: string
    dropdownHeight?: string
  }>(),
  {
    size: 'large',
    invalid: false,
    filter: false,
    disabled: false,
    optionValue: 'value',
    optionLabel: 'label',
    loading: false,
  },
)

const locale = inject<LocaleTypes>('locale') || 'ru'

const id = useId()
const model = defineModel()
const overlayVisible = ref()
const dpRef = ref<HTMLElement>()

const setSize = computed(() => {
  if (props.dropdownHeight) {
    return props.dropdownHeight
  } else if (props.options?.length > 4) {
    return '200px'
  } else {
    return `${props.options?.length * 45 + 14}px`
  }
})
useClickOutside(dpRef)
</script>

<template>
  <FloatLabel :class="['easy-select w-full', size, { 'has-label': label, 'has-placeholder': placeholder }]">
    <Dropdown
      v-model="model"
      :inputId="id"
      :invalid="props.invalid"
      :options="props.options"
      :filter="filter"
      :scroll-height="setSize"
      :optionLabel="optionLabel || 'label'"
      :option-value="optionValue || 'value'"
      :class="['w-full', props.size]"
      append-to="self"
      :placeholder="placeholder"
      :disabled="disabled"
      :virtualScrollerOptions="{ lazy: true, itemSize: 45 }"
      :loading
      :empty-message="lang[locale].empty_options"
      @show="overlayVisible = true"
      @hide="overlayVisible = false"
    >
      <template #dropdownicon>
        <i class="icon-Outline-Arrow-Down2 down-icon" :class="{ rotate: overlayVisible }"></i>
      </template>
      <template #loadingicon>
        <EasyLoader
          :size="20"
          border-color="var(--background-neutral-default)"
          border-top-color="var(--icon-subtle)"
          :border-width="2"
          bar-color="var(--icon-ssubtle)"
        ></EasyLoader>
      </template>
      <template #option="slotProps">
        <slot name="option" v-bind="slotProps"></slot>
      </template>
      <template #value="slotProps">
        <slot name="value" v-bind="slotProps"></slot>
      </template>
    </Dropdown>
    <label v-if="props.label" :for="id">{{ props.label }}</label>
  </FloatLabel>
</template>
