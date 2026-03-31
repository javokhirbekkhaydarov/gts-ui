<script setup lang="ts">
import Listbox from 'primevue/listbox'
import EasyDropdown from '../dropdown/EasyDropdown.vue'
import type { IItem } from '@/types/ui'

defineProps<{
  options: IItem[]
  dropdownClass?: string
  disabled?: boolean
  readonly?: boolean
  filter?: boolean
  width?: string
}>()

const model = defineModel<string | number>()
</script>

<template>
  <EasyDropdown dropdown-class="easy-dropdown-select" :value="model" :disabled="disabled" :readonly="readonly">
    <template #trigger>
      <slot name="trigger" />
    </template>

    <div :style="{ width }">
      <Listbox
        v-model="model"
        :options="options"
        optionLabel="label"
        optionValue="value"
        :class="['w-full', dropdownClass]"
        append-to="self"
        :filter="filter"
      />
    </div>
  </EasyDropdown>
</template>

<style lang="scss">
.easy-dropdown-select {
  .p-overlaypanel-content {
    padding: 0;
  }
  .p-listbox {
    background: var(--elevation-surface-overlay);
    box-shadow: 0 1px 3px 0 #1018281a;
    border: none;
    border-radius: 8px;
    width: 100%;
    z-index: 2;
    &-item {
      color: var(--text-default);
    }
    ::-webkit-scrollbar {
      max-height: 30%;
      height: 100%;
      width: 4px;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--border-bold);
      border-radius: 10px;
      padding-right: 15px;
    }
  }
  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    background: var(--background-neutral-subtle-hovered);
  }
  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    background: var(--background-neutral-subtle-pressed);
  }
}
</style>
