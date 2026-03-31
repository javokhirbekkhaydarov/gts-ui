<script setup lang="ts">
import { ref, watchEffect, watch, computed } from 'vue'
import { ICurrency } from '@/types/autocomplete'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import ListBox from 'primevue/listbox'
import './CurrencyAutocomplete.scss'
import { useClickOutside } from '@/composables/useClickOutside'

const {
  size = 'large',
  optionLabel = 'ru',
  emptyText = 'Нет совподений',
} = defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionLabel?: 'base' | 'ru'
  emptyText?: string
  size?: 'small' | 'large'
}>()

const { get } = useFetch()

const model = defineModel<ICurrency>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const open = ref(false)
const invalid = ref(false)
const currencies = ref<ICurrency[]>([])
const search = ref()

const getCurrencies = catcher(async () => {
  loading.value = true
  const { data } = await get<Response<ICurrency[]>>(`/static/currency`)
  loading.value = false
  currencies.value = data
})

getCurrencies()

useClickOutside(dpRef)

const filterData = computed(() => {
  if (search.value) {
    const val = search.value.toLocaleLowerCase()
    return currencies.value.filter((item) => {
      return item.base.toLowerCase().includes(val) || item[optionLabel].toLowerCase().includes(val)
    })
  }
  return currencies.value
})

function isValid() {
  invalid.value = search.value?.length && filterData.value.length === 0
}

watchEffect(() => {
  if (model.value) {
    search.value = model.value[optionLabel]
    open.value = false
  }
})

watch(model, (val, oldVal) => {
  if (val === null) model.value = oldVal
})

interface Response<T> {
  data: T
}
</script>

<template>
  <div class="currency-autocomplete relative" ref="dpRef" @clickOutside="open = false">
    <EasyInput
      v-model="search"
      :label
      :placeholder
      :prefix-icon="prefixIcon"
      :loading
      :invalid
      :size
      @focusout="isValid"
      @focus="open = true"
      @input="open = true"
    />
    <div v-if="filterData.length > 0 && open" class="dropdown">
      <ListBox
        v-model="model"
        :options="filterData"
        :optionLabel="optionLabel"
        listStyle="max-height:250px"
        :loading="loading"
      >
        <template #option="{ option }">{{ option[optionLabel] }} ({{ option.base }})</template>
      </ListBox>
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
