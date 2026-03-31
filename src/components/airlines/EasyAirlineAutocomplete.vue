<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'
import { IAirline } from '@/types/autocomplete'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import { debounce } from '@/utils/debounce'
import ListBox from 'primevue/listbox'
import './EasyAirlineAutocomplete.scss'
import {useClickOutside} from "@/composables/useClickOutside";

withDefaults(defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionLabel?: string
  emptyText?: string
  size?: 'small' | 'large'
}>(), {
  size: 'large',
  optionLabel: 'name',
  emptyText: 'Нет совподений'
})

const { get } = useFetch()

const model = defineModel<IAirline>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const empty = ref(false)
const open = ref(false)
const invalid = ref(false)
const airlines = ref<IAirline[]>([])
const search = ref()

const getAirlines = catcher(async (val: string) => {
  empty.value = false
  if (!val || val?.length < 2) return
  loading.value = true
  const { data } = await get<Response<IAirline[]>>(`/static/airlines/${val}`)
  loading.value = false
  open.value = true

  airlines.value = data
  if (data.length === 0) {
    empty.value = true
  }
})

const fetchData = debounce(getAirlines, 400)

useClickOutside(dpRef)

function isValid() {
  invalid.value = search.value?.length && airlines.value.length === 0
}

watchEffect(() => {
  if (model.value) {
    search.value = model.value.name
    open.value = false
    airlines.value = []
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
  <div class="airline-autocomplete relative" ref="dpRef" @clickOutside="open = false">
    <EasyInput
      v-model="search"
      :label
      :placeholder
      :prefix-icon="prefixIcon"
      :loading
      :invalid
      :size
      @input="fetchData(search)"
      @focus="fetchData(search)"
      @focusout="isValid"
    />
    <div v-if="airlines.length > 0 && open" class="dropdown">
      <ListBox
        v-model="model"
        :options="airlines"
        :optionLabel
        listStyle="max-height:250px"
      />
    </div>
    <div v-else-if="search && empty && open" class="dropdown">
      <div class="absolute empty">{{ emptyText }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
