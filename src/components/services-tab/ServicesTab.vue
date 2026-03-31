<script setup lang="ts">
import { computed, ComputedRef, inject, onMounted, ref } from 'vue'
import type { IItem } from 'src/types/ui'
import './ServicesTab.scss'
import EasyTabs from '@/components/tabs/EasyTabs.vue'
import { EnvTypes, IService, LocaleTypes, ServicesTypes } from '@/types'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'

interface Response<T> {
  data: T
}

const props = withDefaults(
  defineProps<{
    locale: LocaleTypes
  }>(),
  {
    locale: 'ru',
  },
)

const { get } = useFetch()

const services = ref<IService[]>([])
const loading = ref(false)

const getServices = catcher(async () => {
  const servicesInStorage = sessionStorage.getItem('services')

  if (servicesInStorage) {
    services.value = JSON.parse(servicesInStorage)
    return
  }

  loading.value = true
  const { data } = await get<Response<IService[]>>('/static/products')
  loading.value = false

  services.value = data
  sessionStorage.setItem('services', JSON.stringify(data))
})

const env = inject<ComputedRef<EnvTypes>>('env')

const transformedItems = computed<IItem[]>(() =>
  services.value.map(({ label, ...rest }) => ({
    label: label[props.locale],
    ...rest,
    disabled: !rest.env?.includes(env?.value as EnvTypes),
  })),
)

const model = defineModel<ServicesTypes>()

onMounted(() => getServices())
</script>

<template>
  <EasyTabs v-model="model" :items="transformedItems" :loading="loading"></EasyTabs>
</template>

<style scoped lang="scss"></style>
