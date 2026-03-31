<script setup lang="ts">
import { ref } from 'vue';
import './EasyPopover.scss'


const open = ref(false)
</script>

<template>
  <div class="easy-popover" @mouseleave="open = false">
    <div class="trigger" @mouseover="open= true">
      <slot name="trigger" />
    </div>

    <Transition name="fade">
      <div v-if="open" class="content">
        <slot />
      </div>
    </Transition>
  </div>

</template>
