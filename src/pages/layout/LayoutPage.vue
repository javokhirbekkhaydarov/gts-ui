<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import EasyProfileDropdown from '@/components/header/profile/ProfileDropdown.vue'
import { links, user } from '@/constants'
import { reactive, ref } from 'vue'
import EasyPagination from '@/components/pagination/EasyPagination.vue'
import { LocaleTypes } from '@/types'
import { EasyCountry, ICountry } from '@/index'
import EasyAirportAutocomplete from '@/components/airports/EasyAirportAutocomplete.vue'
import { IAirport, ICity } from '@/types/autocomplete'
import PaymentModal from '@/components/payment/PaymentModal.vue'
import { EnvTypes } from '@/types'
import EasyServicesTab from '@/components/services-tab/ServicesTab.vue'
import { ServicesTypes } from '@/types'
import EasyCity from '@/components/city/CityAutocomplete.vue'
import EasyMultiSelect from '@/components/multiselect/EasyMultiSelect.vue'

withDefaults(
  defineProps<{
    routeName: string
    isDark?: boolean
  }>(),
  {
    routeName: '',
  },
)

const params = reactive({
  page: 1,
  per_page: 1,
  provider_id: [1, 2, 3],
  supplier_id: undefined,
  status: undefined,
  type: undefined,
  code: undefined,
})

const locale = ref<LocaleTypes>('ru')

const country = ref<ICountry>()
const city = ref<ICity>()
const airport = ref<IAirport>()
const payment = ref(false)
const baseUrl = ref('https://api2.globaltravel.space')
const env = ref<EnvTypes>('development')
const service = ref<ServicesTypes>('flights')
const providers = ref([
  { label: 'Provider 1', value: "1" },
  { label: 'Provider 2', value: "2" },
  { label: 'Provider 3', value: "3" },
])
function logOut() {
  console.log(123132)
}
</script>

<template>
  <div class="layout-page">
    <EasyLayout :routeName :isDark :locale="locale" :baseUrl="baseUrl" :env="env" @log-out="logOut">
      <template #header>
        <EasyProfileDropdown :user="user" :links="links" />
      </template>

      <div class="blur-block" style="padding: 16px">
        <EasyPagination :total-records="30" v-model:per-page="params.per_page" v-model="params.page" />

        <br />

        <EasyCountry v-model="country" label="Country" />
        <br />

        <EasyCity v-model="city" label="City" :countryCode="country?.code" />
        <br />
        {{ params.provider_id }}
        <EasyMultiSelect v-model="params.provider_id" :options="providers" size="large" display="chip" />
        <br />

        <br>
        <EasyAirportAutocomplete v-model="airport" label="Airport" />
        <PaymentModal
          :loading="false"
          id="911f46c4ebfe48fda0df14d4430aaad1"
          type="contract"
          :index="175"
          name="name"
          description="description"
          v-model="payment"
        />

        <EasyServicesTab :locale="locale" v-model="service" />
      </div>
    </EasyLayout>
  </div>
</template>
