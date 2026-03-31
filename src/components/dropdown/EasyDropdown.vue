<script setup lang="ts">
import OverlayPanel from 'primevue/overlaypanel';
import {ref, watch} from "vue";
import './EasyDropdown.scss'

const emit = defineEmits<{
  (e: 'toggle', val: boolean): void
}>()

const props =defineProps<{
  dropdownClass?: string
  value?: unknown
  disabled?: boolean
  readonly?: boolean
}>()

const op = ref<OverlayPanel>()

function toggle(event: Event) {
  if (props.disabled || props.readonly) return
  op.value?.toggle(event);
}

watch(() => props.value, ()=> {
  op.value?.hide()
})

</script>

<template>
  <div class="easy-dropdown">
    <div @click="toggle" class="no-select trigger">
      <slot name="trigger" />
    </div>
    <OverlayPanel
      ref="op"
      :class="dropdownClass"
      @show="emit('toggle', true)"
      @hide="emit('toggle', false)"
    >
      <slot :op="op" />
    </OverlayPanel>
  </div>
</template>
