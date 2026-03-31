<script setup lang="ts">
import countryList from '@/constants/countries'
import { computed, onMounted, ref } from 'vue'
import { ICountry, IPhoneNumber } from '@/types/autocomplete'
import EasyDropdown from '../dropdown/EasyDropdown.vue'
import EasyIcon from '../icon/EasyIcon.vue'
import './EasyPhoneNumber.scss'
import EasyInput from '../input/EasyInput.vue'
import { catcher } from '@/utils/catcher'

const props = withDefaults(
  defineProps<{
    locale: 'ru' | 'uz' | 'en'
    size?: 'small' | 'large'
    placeholder?: string
    invalid?: boolean
    disabled?: boolean
    readonly?: boolean
  }>(),
  {
    locale: 'ru',
    size: 'large',
  },
)

const model = defineModel<IPhoneNumber>({
  default: {
    phone_code: '',
    phone_number: '',
  },
})

const search = ref('')
const countries = ref<ICountry[]>([])
const selectedCountry = ref<ICountry>()

const label = computed<keyof ICountry>(() => {
  if (props.locale === 'ru') {
    return 'country_rus'
  } else if (props.locale === 'uz') {
    return 'country_uzb'
  }
  return 'country_eng'
})

const getCountries = catcher(async () => {
  const data = countryList.filter((item) => {
    const { country_eng, country_rus, country_uzb, code } = item
    return JSON.stringify([country_eng, country_rus, country_uzb, code])
      ?.toLowerCase()
      .includes(search.value.toLowerCase())
  })
  countries.value = data
})

getCountries()

function selectCountry(country: ICountry) {
  selectedCountry.value = country
  model.value.phone_code = String(country.phone_code)
}

onMounted(() => {
  if (model.value) {
    selectedCountry.value = countryList.find((item) => String(item.phone_code) === String(model.value?.phone_code))
  }
})
</script>

<template>
  <div class="easy-phone-number">
    <EasyDropdown
      :value="selectedCountry"
      dropdown-class="easy-phone-number__op"
      :disabled="disabled"
      :readonly="readonly"
    >
      <template #trigger>
        <div :class="['easy-phone-number__trigger', size, { disabled, readonly, invalid }]">
          +{{ selectedCountry?.phone_code }}
          <EasyIcon name="icon-Outline-Arrow-Down2" :size="20" />
        </div>
      </template>
      <template #default>
        <EasyInput
          v-model="search"
          placeholder="Поиск по странам"
          prefix-icon="icon-Outline-Search"
          size="small"
          @input="getCountries"
        />
        <div class="easy-phone-number__list scrollbar">
          <div
            v-for="country of countries"
            :key="country.code"
            class="easy-phone-number__item"
            :class="{ active: String(country.phone_code) === String(selectedCountry?.phone_code) }"
            @click="selectCountry(country)"
          >
            <div :style="`background-image: url(${country.image})`" class="easy-phone-number__flag"></div>
            <span class="easy-phone-number__name">{{ country[label] }}</span>
            <span class="easy-phone-number__code">(+{{ country.phone_code }})</span>
          </div>
        </div>
      </template>
    </EasyDropdown>
    <EasyInput
      v-model="model.phone_number"
      :placeholder="placeholder || selectedCountry?.phone_mask || ''"
      type="mask"
      :size="size"
      :invalid="invalid"
      :disabled="disabled"
      :readonly="readonly"
      :mask="selectedCountry?.phone_mask ?? ''"
    />
  </div>
</template>

<style lang="scss" scoped></style>
