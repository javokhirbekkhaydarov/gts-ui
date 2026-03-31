<script setup lang="ts">
import Button from 'primevue/button';
import { computed } from 'vue';
import './EasyButton.scss';

defineOptions({
  name: 'EasyButton'
});

interface Props {
  label?: string;
  severity?: 'secondary' | 'info' | 'help' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  outlined?: boolean;
  raised?: boolean;
  rounded?: boolean;
  icon?: string;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
  loadingIcon?: string;
  link?: boolean;
  plain?: boolean;
  disabled?: boolean;
  square?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xl',
  outlined: false,
  raised: false,
  rounded: true,
  iconPos: 'left',
  loading: false,
  link: false,
  plain: false,
  square: false
});

const buttonProps = computed(() => {
  const { size, ...rest } = props;
  return {
    ...rest,
    class: ['easy-button', size, { square: props.square }]
  };
});
</script>

<template>
  <Button v-bind="buttonProps">
    <slot></slot>
  </Button>
</template>

<style scoped lang="scss">
/* Component specific styles */
</style>
