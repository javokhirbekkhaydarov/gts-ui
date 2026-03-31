<template>
  <div class="easy-breadcrumb" :class="{'blur-block': !withoutBg}">
    <Breadcrumb :home="home" :model="items">
      <template #item="{item}">
        <router-link v-if="item?.icon" :class="[home?.icon, 'home']" :to="item.route"/>
        <router-link v-if="item?.route" class="link" :to="item.route">
          {{ item.label }}
        </router-link>
        <span v-else class="last">
          {{ item.label }}
        </span>
      </template>

      <template #separator>
        <span class="icon-Outline-Arrow-Right2"/>
      </template>
    </Breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb';
import type {BreadcrumbItem, BreadcrumbHomeItem} from '@/types/ui';
import "./EasyBreadcrumb.scss";

defineProps<{
  items: BreadcrumbItem[],
  home?: BreadcrumbHomeItem,
  withoutBg?: boolean
}>()

</script>


