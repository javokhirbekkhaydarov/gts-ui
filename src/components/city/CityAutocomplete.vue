<script setup lang="ts">
import { ref, watchEffect, watch, computed } from 'vue'
import { ICity } from '@/types/autocomplete'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import ListBox from 'primevue/listbox'
import './CityAutocomplete.scss'
import { useClickOutside } from '@/composables/useClickOutside'

const {
  size = 'large',
  optionLabel = 'name',
  emptyText = 'Нет совподений',
  countryCode,
  optionValue
} = defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionLabel?: 'name' | 'state_name'
  optionValue?: 'name' | 'state_name'
  emptyText?: string
  countryCode?: string
  size?: 'small' | 'large'
  invalid?: boolean
  disabled?: boolean
}>()

const { get } = useFetch()

const model = defineModel<ICity | string>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const open = ref(false)
const invalidVal = ref(false)
const cities = ref<ICity[]>([])
const search = ref<string>('')

const getCities = catcher(async () => {
  if (!countryCode) return
  loading.value = true
  const { data } = await get<Response<ICity[]>>(`/static/cities/${countryCode}`)
  loading.value = false
  cities.value = data
})

getCities()

useClickOutside(dpRef)

const filterData = computed(() => {
  if (search.value) {
    const val = search.value.toLowerCase()
    return cities.value.filter((item) => {
      return item[optionLabel].toLowerCase().includes(val)
    })
  }
  return cities.value
})

function isValid() {
  invalidVal.value = filterData.value.length === 0
}

watchEffect(() => {
  if (model.value && typeof model.value !== 'string') {
    search.value = model.value[optionLabel]
    open.value = false
  } else if (optionValue) {
    const found = cities.value.find((item) => item[optionValue] === model.value)
    if (!found) return
    search.value = found[optionLabel]
    open.value = false
  }
})

watch(() => countryCode, () => {
  search.value = ''
  cities.value = []
  getCities()
})

watch(model, (val, oldVal) => {
  if (val === null) model.value = oldVal
})

interface Response<T> {
  data: T
}
</script>

<template>
  <div class="city-autocomplete relative" ref="dpRef" @clickOutside="open = false">
    <EasyInput
      v-model="search"
      :label
      :placeholder
      :prefix-icon="prefixIcon"
      :loading
      :invalid="invalid || invalidVal"
      :size
      :disabled="disabled"
      @focusout="isValid"
      @focus="open = true"
      @input="open = true"
    />
    <div v-if="filterData.length > 0 && open" class="dropdown">
      <ListBox
        v-model="model"
        :options="filterData"
        :optionLabel="optionLabel"
        :optionValue="optionValue"
        listStyle="max-height:250px"
        :loading="loading"
      />
    </div>
    <div v-else-if="open" class="dropdown">
      <div class="absolute empty">{{ emptyText }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.country-icon {
  height: 20px;
}
</style>
