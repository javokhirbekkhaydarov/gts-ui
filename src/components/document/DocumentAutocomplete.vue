<script setup lang="ts">
import { ref, watchEffect, watch, computed } from 'vue'
import { IDocument } from '@/types/autocomplete'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import ListBox from 'primevue/listbox'
import './DocumentAutocomplete.scss'
import { useClickOutside } from '@/composables/useClickOutside'
import { debounce } from '@/utils/debounce'

const {
  size = 'large',
  optionLabel = 'title',
  emptyText = 'Нет совподений',
  country
} = defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionLabel?: 'title' | 'type'
  emptyText?: string
  country?: string
  size?: 'small' | 'large'
}>()

const { get } = useFetch()

const model = defineModel<IDocument>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const open = ref(false)
const invalid = ref(false)
const documents = ref<IDocument[]>([])
const search = ref<string>('')

const getDocuments = catcher(async () => {
  loading.value = true
  const params: { country?: string } = {}
  if (country) {
    params.country = country
  }

  const { data } = await get<Response<IDocument[]>>(`/static/typedocument`, {
    params
  })
  loading.value = false
  documents.value = data
})

getDocuments()

useClickOutside(dpRef)

const filterData = computed(() => {
  if (search.value) {
    const val = search.value.toLowerCase()
    return documents.value.filter((item) => {
      return item[optionLabel].toLowerCase().includes(val)
    })
  }
  return documents.value
})

function isValid() {
  invalid.value = filterData.value.length === 0
}

watchEffect(() => {
  if (model.value) {
    search.value = model.value[optionLabel]
    open.value = false
  }
})

const lazyFetch = debounce(() => {
  getDocuments()
}, 300)

watch(() => country, () => lazyFetch())

watch(model, (val, oldVal) => {
  if (val === null) model.value = oldVal
})

interface Response<T> {
  data: T
}
</script>

<template>
  <div class="document-autocomplete relative" ref="dpRef" @clickOutside="open = false">
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
