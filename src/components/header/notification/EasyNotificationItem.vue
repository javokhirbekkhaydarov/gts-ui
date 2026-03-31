<script setup lang="ts">
import EasyIcon from "@/components/icon/EasyIcon.vue";
</script>

<template>
  <div class="event-item">
    <div class="event-item-icon">
      <EasyIcon name="icon-Bold-Document" color="#475569" :size="24" />
    </div>
    <div class="event-item-main">
      <div class="event-item-header">
        <div>
          <h6 class="event-item-header-title">Сумма активации договора снизилась</h6>
          <p class="event-item-header-subtitle">#9601912 • RizoTravel</p>
        </div>
        <time class="event-item-header-time">2 ч.</time>
      </div>
      <p class="event-item-desc">
        Сумма активации договора с агентом {имя агента} снизилась до {новая сумма} USD. Пожалуйста, внесите
        дополнительные средства
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
