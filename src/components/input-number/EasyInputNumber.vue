<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import './EasyInputNumber.scss';
import {useId} from "vue";

const model = defineModel<number>();

withDefaults(defineProps<{
  label?: string
  placeholder?: string
  tabindex?: number
  readonly?: boolean
  invalid?: boolean
  size?: 'small' | 'large'
  disabled?: boolean
  prefixIcon?: string
}>(), {
  size: 'large',
  type: 'text'
})

const emit = defineEmits<{
  (e: 'keydown.down', val?: string): void;
  (e: 'keydown.up', val?: string): void;
  (e: 'keydown.enter', val?: string): void;
  (e: 'keydown.tab', val?: string): void;
  (e: 'focus', val?: string): void;
  (e: 'focusout', val?: string): void;
}>();

const id = useId();
</script>

<template>
  <FloatLabel :class="['easy-input-number w-full', size, { 'has-label': label, disabled, 'has-prefix': prefixIcon }]">
    <InputNumber
      v-model="model"
      :placeholder="placeholder"
      :class="{ 'p-invalid': invalid, 'has-prefix': prefixIcon }"
      :feedback="false"
      :tabindex="tabindex"
      :readonly="readonly"
      :id="id"
      :disabled="disabled"
      autocomplete="off"
      @keydown.down="emit('keydown.down')"
      @keydown.up="emit('keydown.up')"
      @keydown.enter="emit('keydown.enter')"
      @keydown.tab="emit('keydown.tab')"
      @focus="emit('focus')"
      @focusout="emit('focusout')"
    />
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <div v-if="prefixIcon" class="prefix">
      <i :class="[prefixIcon.startsWith('icon-') ? prefixIcon : 'icon-' + prefixIcon]"></i>
    </div>
  </FloatLabel>
</template>

<style scoped lang="scss">

</style>
