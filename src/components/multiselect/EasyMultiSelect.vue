<script setup lang="ts">
import { inject, ref, useId, computed, type ComputedRef, watch, onMounted } from 'vue'
import { IItem } from '@/types/ui'
import FloatLabel from 'primevue/floatlabel'
import MultiSelect from 'primevue/multiselect'
import './EasyMultiSelect.scss'
import { lang } from '@/constants/lang'
import { LocaleTypes } from '@/types'
import EasyIcon from '../icon/EasyIcon.vue'

const id = useId()

const model = defineModel<string[] | number[]>({ default: () => [] })

const selected = ref<string[]>([])

const locale = inject<ComputedRef<LocaleTypes>>('locale') || ref('ru')

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
    display?: 'comma' | 'chip'
    showToggleAll?: boolean
    placeholder?: string
    maxSelectedLabels?: number
  }>(),
  {
    size: 'large',
    invalid: false,
    filter: false,
    disabled: false,
    optionValue: 'value',
    optionLabel: 'label',
    loading: false,
    display: 'comma',
    showToggleAll: true,
  },
)

const overlayVisible = ref()

const computedOptions = computed(() => {
  if (props.showToggleAll) {
    return [
      {
        label: lang[locale.value].select_all,
        value: 'all',
      },
      ...props.options,
    ]
  }

  return props.options
})

function allSelected(e: string[]) {
  const isAllSelected = e.includes('all')
  const isModelHaveAll = selected.value.includes('all')
  const isAllHave = props.options.every((item) => e.includes(item.value as string))

  if (!isAllSelected && isModelHaveAll) return (selected.value = [])

  if (isAllSelected && !isModelHaveAll) return (selected.value = computedOptions.value.map((item) => item.value as string))

  if (!isAllHave && isAllSelected) return (selected.value = e.filter((item) => item !== 'all'))

  if (isAllHave && !isAllSelected) return (selected.value = ['all', ...e])

  selected.value = e
}

function removeItem(item: string) {
  selected.value = selected.value.filter((val) => val !== item)
  allSelected(selected.value)
}

watch(selected, (val) => {
  model.value = val.filter((item) => item !== 'all')
})

onMounted(() => {
  selected.value = model.value.map(String)
})

</script>

<template>
  <FloatLabel :class="['easy-multi-select w-full', size, { 'has-label': label }]">
    <MultiSelect
      :id="id"
      :model-value="selected"
      :options="computedOptions"
      :optionLabel="optionLabel"
      :option-value="optionValue"
      :class="['w-full', size]"
      :disabled="disabled"
      :loading="loading"
      append-to="self"
      :filter="filter"
      :invalid="invalid"
      :display="display"
      close-icon="none"
      :close-button="false"
      :show-toggle-all="false"
      @show="overlayVisible = true"
      @hide="overlayVisible = false"
      :empty-message="lang[locale].empty_text"
      :filter-placeholder="lang[locale].search"
      :placeholder="placeholder"
      :max-selected-labels="maxSelectedLabels"
      @change="(e) => allSelected(e.value)"
    >
      <template #dropdownicon>
        <i class="icon-Outline-Arrow-Down2 down-icon" :class="{ rotate: overlayVisible }"></i>
      </template>
      <template #closeicon>
        <span class="icon-Outline-Close_SM"></span>
      </template>
      <template #value="{ value }">
        {{ !value.length && placeholder ? placeholder : '' }}
        <span v-if="display === 'comma'">
          {{
            value
              .filter((val: string) => val !== 'all')
              .slice(0, maxSelectedLabels)
              .map((val: string) => options.find((opt) => opt.value === val)?.label || val)
              .join(', ')
          }}
        </span>
        <template v-else>
          <div
            v-for="item in value.filter((val: string) => val !== 'all').slice(0, maxSelectedLabels)"
            :key="item"
            class="p-multiselect-token"
            style="gap: 5px"
          >
            <span class="p-multiselect-token-label">
              {{ options.find((opt) => opt.value === item)?.label || item }}
            </span>
            <EasyIcon :size="16" name="icon-Outline-CloseSquare pointer" @click="removeItem(item)" />
          </div>
        </template>
        <span v-if="maxSelectedLabels && value.length > maxSelectedLabels">...</span>
      </template>
    </MultiSelect>
    <label v-if="label" :for="id">{{ label }}</label>
  </FloatLabel>
</template>
