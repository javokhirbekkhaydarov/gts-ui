<script setup lang="ts">
import type { IItem } from 'src/types/ui'
import './EasySwitchToggle.scss'
import SelectButton from 'primevue/selectbutton'

withDefaults(
  defineProps<{
    options: IItem[]
    optionValue?: string
    optionLabel?: string
    optionDisabled?: string
  }>(),
  {
    optionLabel: 'label',
    optionDisabled: 'constant',
  },
)

const emit = defineEmits(['change'])
const model = defineModel()
</script>

<template>
  <SelectButton
    v-model="model"
    :unselectable="false"
    :options="options"
    :optionDisabled="optionDisabled"
    :option-label="optionLabel"
    :option-value="optionValue"
    aria-labelledby="basic"
    class="easy-switchtoggle"
    @change="emit('change', $event.value)"
  />
</template>
