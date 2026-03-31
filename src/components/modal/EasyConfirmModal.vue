<script setup lang="ts">
import EasyButton from '../button/EasyButton.vue'
import EasyIcon from '../icon/EasyIcon.vue'
import EasyModal from './EasyModal.vue'

const { confirmButtonText = 'Подтвердить', cancelButtonText = 'Отмена' } = defineProps<{
  type: 'warning' | 'success' | 'danger'
  title?: string
  text?: string
  loading?: boolean
  backgroundColor?: string
  confirmButtonText?: string
  cancelButtonText?: string
}>()

const icons = {
  warning: 'icon-Bold-Danger',
  success: 'icon-Bold-check-circle',
  danger: 'icon-Bold-InfoCircle',
  info: 'icon-Info-Circle',
}

const emit = defineEmits<{
  (e: 'ok'): void
}>()

const model = defineModel<boolean>({ default: false })
</script>

<template>
  <EasyModal v-model="model" max-width="440px" hide-close :show-header="false" :backgroundColor class="confirm-modal">
    <div class="text-center">
      <div :class="['icon', type]">
        <EasyIcon :name="icons[type]" :size="24" />
      </div>
      <div class="title">{{ title }}</div>
      <div class="text">{{ text }}</div>

      <div class="flex" style="gap: 12px;">
        <EasyButton
          v-if="type === 'success'"
          class="w-full"
          :loading="loading"
          size="lg"
          @click="emit('ok'); model = false;"
        >
          {{ confirmButtonText }}
        </EasyButton>

        <template v-else>
          <EasyButton outlined severity="secondary" class="w-full" size="lg" @click="model = false">
          {{ cancelButtonText }}
        </EasyButton>

        <EasyButton
          :severity="type === 'danger' ? 'danger' : undefined"
          class="w-full"
          :loading="loading"
          size="lg"
          @click="emit('ok')"
        >
          {{ confirmButtonText }}
        </EasyButton>
        </template>
      </div>
    </div>
  </EasyModal>
</template>

<style lang="scss">
.confirm-modal {
  .icon {
    margin-bottom: 20px;
    width: 48px;
    height: 48px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &.success, &.info {
      background: var(--background-accent-green-subtlest);
      span {
        color: var(--icon-success) !important;
      }
    }
    &.danger {
      background: var(--background-accent-red-subtlest);
      span {
        color: var(--icon-danger) !important;
      }
    }
    &.warning {
      background: var(--background-accent-orange-subtlest);
      span {
        color: var(--icon-warning) !important;
      }
    }
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 8px;
    color: var(--text-default);
  }
  .text {
    font-size: 14px;
    color: var(--text-subtle);
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 35px;
  }
}
</style>
