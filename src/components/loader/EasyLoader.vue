<script setup lang="ts">
import './EasyLoader.scss';
import {computed} from "vue";

const props = withDefaults(defineProps<{
  size?: number
  borderWidth?: number
  borderColor?: string
  borderTopColor?: string
}>(), {
  size: 40,
  borderWidth: 3,
  borderColor: 'var(--background-neutral-default)',
  borderTopColor: 'var(--icon-subtle)'
})

const style = computed(() => ({
  width: props.size + 'px',
  height: props.size + 'px',
  borderWidth: props.borderWidth + 'px',
  borderColor: props.borderColor,
  borderTopColor: props.borderTopColor
}));

</script>

<template>
  <div class="loader" :style="style"></div>
</template>
