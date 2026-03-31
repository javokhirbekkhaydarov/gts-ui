<script setup lang="ts">
defineProps<{title: string, subtitle: string}>();
</script>

<template>
<div class="no-notification-wrap">
  <img loading="lazy" src="https://api.globaltravel.space/media/icons/bell.svg" alt="Bell photo" class="no-notification-wrap-img"/>
  <h4 class="no-notification-wrap-title">{{title}}</h4>
  <p class="no-notification-wrap-subtitle">{{subtitle}}</p>
</div>
</template>

<style scoped lang="scss">

</style>
