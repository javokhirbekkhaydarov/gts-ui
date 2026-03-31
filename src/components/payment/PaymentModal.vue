<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { IContractBalance, IProvider, IResponse, LocaleTypes } from '@/types'
import { catcher } from '@/utils/catcher'
import { computed, inject, onMounted, ref, ComputedRef } from 'vue'
import { formatCurrency } from '@/utils/formatter'
import EasyModal from '@/components/modal/EasyModal.vue'
import EasyTabs from '@/components/tabs/EasyTabs.vue'
import EasyCheckbox from '@/components/checkbox/EasyCheckbox.vue'
import EasyButton from '@/components/button/EasyButton.vue'
import EasyIcon from '@/components/icon/EasyIcon.vue'
import { lang } from '@/constants/lang'

const props = defineProps<{
  loading?: boolean
  id: string
  type: 'own' | 'contract'
  index?: number | null
  name: string
  description?: string
}>()

const visible = defineModel<boolean>()

const emit = defineEmits<{
  (e: 'ticketing'): void
  (e: 'close'): void
}>()

const { get, post } = useFetch()

const locale = inject<ComputedRef<LocaleTypes>>('locale') || ref('ru')

const provider = ref<IProvider>()
const contract = ref<IContractBalance>()
const activeTab = ref('deposit')
const agree = ref(true)

const tabs = [
  { value: 'deposit', label: lang[locale.value].payment.deposit },
  { value: 'card', label: lang[locale.value].payment.card, disabled: true },
  { value: 'wallet', label: lang[locale.value].payment.wallet, disabled: true },
]

const balance = computed(() => {
  if (props.type === 'contract')
    return {
      balance: contract.value?.balance,
      currency: contract.value?.currency,
    }
  return {
    balance: provider.value?.balance,
    currency: provider.value?.currency,
  }
})

const getProviderInfo = catcher(async () => {
  const { data } = await get<IResponse<IProvider>>(`/v1/providers/${props.id}/`)
  provider.value = data
})

const getContractInfo = catcher(async () => {
  const { data } = await post<IResponse<IContractBalance>>(`/v1/contract/balance/`, {
    provider_id: props.id,
    index: props.index,
  })
  contract.value = data
})

onMounted(() => {
  if (props.type === 'contract') {
    getContractInfo()
  } else {
    getProviderInfo()
  }
})
</script>

<template>
  <EasyModal :title="lang[locale].payment.title" v-model="visible" maxWidth="826px" @close="emit('close')">
    <EasyTabs :items="tabs" v-model="activeTab" />

    <div class="text-14 text-subtle b-description" style="max-width: 422px">
      {{ description }}
    </div>

    <div class="balance">
      <div class="flex justify-between items-center">
        <div class="text-subtle balance__text">
          <EasyIcon name="icon-Outline-Wallet" :size="20" />
          {{ lang[locale].payment.balance }}
        </div>

        <div class="supplier">
          {{ lang[locale].payment.supplier }}:
          <span class="text-brand">{{ name }}</span>
        </div>
      </div>

      <div v-if="balance.balance" class="amount text-default">
        {{ formatCurrency(balance.balance, balance.currency) }}
      </div>
    </div>

    <template #footer>
      <div class="w-full gap-20 flex justify-between">
        <EasyCheckbox v-model="agree" binary>
          {{ lang[locale].payment.agree }}
          <a class="text-brand" target="_blank" href="#">{{ lang[locale].payment.public_offer }}</a>
        </EasyCheckbox>
        <div class="flex balance__footer">
          <EasyButton size="lg" severity="secondary" outlined @click="visible = false" :label="lang[locale].payment.cancel" />
          <EasyButton size="lg" :loading="loading" :disabled="!agree" @click="emit('ticketing')" :label="lang[locale].payment.confirm" />
        </div>
      </div>
    </template>
  </EasyModal>
</template>

<style lang="scss" scoped>
.b-description {
  margin-top: 24px;
  margin-bottom: 16px;
}
.balance {
  border-radius: 12px;
  padding: 16px;
  border: 1px solid var(--border-default);
  margin-top: 16px;
  background: var(--background-neutral-subtle-default);
  padding-bottom: 20px;
  &__text {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .amount {
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    margin-top: 12px;
  }

  &__footer {
    gap: 12px;
  }
}
</style>
