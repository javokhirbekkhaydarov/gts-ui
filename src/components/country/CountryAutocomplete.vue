<script setup lang="ts">
import { ref, watchEffect, watch, inject, computed, type Ref } from 'vue'
import { ICountry } from '@/types/autocomplete'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import { debounce } from '@/utils/debounce'
import ListBox from 'primevue/listbox'
import './CountryAutocomplete.scss'
import { useClickOutside } from '@/composables/useClickOutside'
import countryList from '@/constants/countries'
import { LocaleTypes } from '@/types'

const {
  size = 'large',
  emptyText = 'Нет совподений',
  optionValue
} = defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionValue?: 'code' | 'country_rus' | 'country_eng' | 'country_uzb'
  emptyText?: string
  size?: 'small' | 'large'
  invalid?: boolean
}>()

const model = defineModel<ICountry | string>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const empty = ref(false)
const open = ref(false)
const invalidVal = ref(false)
const countries = ref<ICountry[]>([])
const search = ref()

const locale = inject<Ref<LocaleTypes>>('locale') || ref<LocaleTypes>('ru')

const optionLabel = computed<'country_rus' | 'country_eng' | 'country_uzb'>(() => {
  return locale.value === 'ru' ? 'country_rus' : locale.value === 'en' ? 'country_eng' : 'country_uzb'
})

const getCountries = catcher(async (val: string) => {
  empty.value = false
  if (!val || val?.length < 2) return
  loading.value = true

  const data = countryList.filter((item) => {
    const { country_eng, country_rus, country_uzb, code } = item
    return JSON.stringify([country_eng, country_rus, country_uzb, code])?.toLowerCase().includes(val.toLowerCase())
  })
  loading.value = false
  open.value = true

  countries.value = data
  if (data.length === 0) {
    empty.value = true
  }
})

const fetchData = debounce(getCountries, 400)

useClickOutside(dpRef)

function isValid() {
  invalidVal.value = search.value?.length && countries.value.length === 0
}

function tabHandle() {
  if (countries.value.length > 0) {
    if (optionValue) {
      model.value = countries.value[0][optionValue]
    } else {
      model.value = countries.value[0]
    }
    open.value = false
    countries.value = []
    invalidVal.value = false
  }
}

watchEffect(() => {
  if (model.value && typeof model.value !== 'string') {
    search.value = model.value[optionLabel.value]
    open.value = false
    countries.value = []
  } else if (optionValue) {
    const found = countryList.find((item) => item[optionValue] === model.value)
    if (!found) return
    search.value = found[optionLabel.value]
    open.value = false
    countries.value = []
  }
})

watch(model, (val, oldVal) => {
  if (val === null) model.value = oldVal
})
</script>

<template>
  <div class="country-autocomplete relative" ref="dpRef" @clickOutside="open = false">
    <EasyInput
      v-model="search"
      :label
      :placeholder
      :prefix-icon="prefixIcon"
      :loading
      :invalid="invalidVal || invalid"
      :size
      @input="fetchData(search)"
      @keydown.tab="tabHandle"
      @focus="fetchData(search)"
      @focusout="isValid"
    />
    <div v-if="countries.length > 0 && open" class="dropdown">
      <ListBox
        v-model="model"
        :options="countries"
        :optionLabel="optionLabel"
        :optionValue="optionValue"
        listStyle="max-height:250px"
      />
    </div>
    <div v-else-if="search && empty && open" class="dropdown">
      <div class="absolute empty">{{ emptyText }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.country-icon {
  height: 20px;
}
</style>
