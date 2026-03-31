<script setup lang="ts">
import EasyDropdown from '../../dropdown/EasyDropdown.vue'
import EasyButton from '../../button/EasyButton.vue'
import EasyIcon from '../../icon/EasyIcon.vue'
import EasySwitchToggle from '../../switchtoggle/EasySwitchToggle.vue'
import { IItem } from '@/types/ui'
import { computed, ref } from 'vue'
import './EasyLanguageCurrencyDropdown.scss'
import { ICurrency } from '@/types/autocomplete'
import { LocaleTypes } from '@/types'
import { lang } from '@/constants/lang'

withDefaults(defineProps<{
  currencies?: ICurrency[]
}>(), {
  currencies: () => [],
})

const emit = defineEmits<{
  (e: 'selectLanguage', val: string): void
  (e: 'selectCurrency', val: string): void
}>()

const selCurrency = defineModel('currency', { default: 'UZS' })
const locale = defineModel<LocaleTypes>('locale', { default: 'ru' })

const options = computed<IItem[]>(() => ([
  { label: lang[locale.value as LocaleTypes].language, value: 'language' },
  { label: lang[locale.value as LocaleTypes].currency, value: 'currency' },
]))

const languages: IItem[] = [
  { label: "O'zbekcha", value: 'uz', icon: 'icon-uzbekistan' },
  { label: 'English', value: 'en', icon: 'icon-united-kingdom' },
  { label: 'Русский', value: 'ru', icon: 'icon-russia' },
]

const value = ref('language')
const isOpen = ref(false)

</script>

<template>
  <EasyDropdown @toggle="isOpen = $event" dropdown-class="easy-currency-language-overplay">
    <template #trigger>
      <EasyButton
        size="sm"
        plain
        icon="icon-Bold-global"
        :label="`${locale?.toUpperCase()} • ${selCurrency}`"
        :class="{ 'isCurrencyLanguageDropdownOpen': isOpen}"
        class="easy-currency-language-button"
      />
    </template>

    <template #default>
      <EasySwitchToggle :options="options" v-model="value" option-value="value" :style="{ marginBottom: '8px' }" />
      <div class="wrapper scrollbar">
        <template v-if="value === 'language'">
          <div
            v-for="language in languages"
            :key="language.value"
            class="option"
            :class="{ active: language.value === locale }"
            @click="emit('selectLanguage', String(language.value))"
          >
            <EasyIcon :name="String(language.icon)" :size="24" />
            <p>{{ language.label }}</p>
          </div>
        </template>
        <template v-else>
          <div
            class="option"
            v-for="currency in currencies"
            :key="currency.base"
            :class="{active: currency.base === selCurrency }"
            @click="emit('selectCurrency', currency.base)"
          >
            {{ currency.base }}
          </div>
        </template>
      </div>
    </template>
  </EasyDropdown>
</template>

<style scoped lang="scss"></style>
