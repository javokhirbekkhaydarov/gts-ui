<script setup lang="ts">
import { ref, watchEffect, watch, inject, computed, Ref } from 'vue'
import { IAirport } from '@/types/autocomplete'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import { debounce } from '@/utils/debounce'
import ListBox from 'primevue/listbox'
import './EasyAirportAutocomplete.scss'
import {useClickOutside} from "@/composables/useClickOutside";
import { LocaleTypes } from '@/types';
import {lang} from '@/constants/lang';

withDefaults(defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  size?: 'small' | 'large'
  disabled?: boolean
}>(), {
  size: 'large',
})

const { get } = useFetch()

const model = defineModel<IAirport>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const empty = ref(false)
const open = ref(false)
const invalid = ref(false)
const airports = ref<IAirport[]>([])
const search = ref()

const locale = inject<Ref<LocaleTypes>>('locale') || ref<LocaleTypes>('ru')
const optionLabel = computed(() => {
  return locale.value === 'ru' ? 'name_rus' : 'name_eng'
})
const emptyText = computed(() => {
  return lang[locale.value].empty_text
})

const getAirports = catcher(async (val: string) => {
  empty.value = false
  if (!val || val?.length < 2) return
  loading.value = true
  const { data } = await get<Response<IAirport[]>>(`/static/airports/${val}`)
  loading.value = false
  open.value = true

  airports.value = data
  if (data.length === 0) {
    empty.value = true
  }
})

const fetchData = debounce(getAirports, 400)

useClickOutside(dpRef)

function isValid() {
  invalid.value = search.value?.length && airports.value.length === 0
}

watchEffect(() => {
  if (model.value) {
    search.value = model.value[optionLabel.value]
    open.value = false
    airports.value = []
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
      :disabled="disabled"
      :size
      @input="fetchData(search)"
      @focus="fetchData(search)"
      @focusout="isValid"
    />
    <div v-if="airports.length > 0 && open" class="dropdown">
      <ListBox
        v-model="model"
        :options="airports"
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
