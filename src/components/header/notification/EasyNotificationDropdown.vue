<script setup lang="ts">
import EasyDropdown from "@/components/dropdown/EasyDropdown.vue";
import EasyButton from "@/components/button/EasyButton.vue";
import EasyIcon from "@/components/icon/EasyIcon.vue";
import './EasyNotificationDropdown.scss'
import {IItem} from "@/types/ui";
import EasyTabs from "@/components/tabs/EasyTabs.vue";
import EasyNotificationItem from "./EasyNotificationItem.vue";
import {ref} from "vue";
import EasyNoNotification from "@/components/header/notification/EasyNoNotification.vue";

const { title = 'Уведомления', emptyTitle = 'No notifications yet', emptySubtitle = 'We\'ll let you know when updates arrive!' } = defineProps<{
  title?: string;
  emptyTitle?: string;
  emptySubtitle?: string;
}>()

const tabs: IItem[] = [
  {
    label: '<div class="event-wrap">События <p class="event-wrap-count">25</p></div>',
    value: 'event'
  },
  {
    label: 'Сообщения',
    value: 'message'
  },
  {
    label: 'Системные',
    value: 'systems'
  },
];

const activeTab = ref(tabs[0].value);
const isOpen = ref(false)
</script>

<template>
  <EasyDropdown @toggle="isOpen = $event" dropdown-class="easy-notification-overplay" class="easy-notification-dropdown">
    <template #trigger>
      <EasyButton
        plain
        :aria-label="title"
        v-tooltip.bottom="title"
        :class="{'no-background': isOpen}"
        style="max-width: 32px;"
      >
        <EasyIcon class="icon" name="icon-Bold-Notification" :size="24">
          <span class="notification-count">24</span>
        </EasyIcon>
      </EasyButton>
    </template>

    <template #default>
      <div class="dropdown-header-navigation">
        <h5 class="dropdown-header-navigation-title">{{ title }}</h5>
        <div class="flex items-center" :style="{gap: '12px'}">
          <EasyButton plain style="max-width: 32px;">
            <EasyIcon class="icon" name="icon-Outline-External_Link" :size="20"/>
          </EasyButton>
          <EasyButton plain style="max-width: 32px;">
            <EasyIcon class="icon" name="icon-Outline-Setting" :size="20"/>
          </EasyButton>
        </div>
      </div>
      <div class="tabs-container">
        <EasyTabs :items="tabs" v-model="activeTab"/>
      </div>
      <div class="event-container scrollbar">
        <template v-if="activeTab === 'event'">
          <EasyNotificationItem v-for="item in 5" :key="item"/>
        </template>
        <template v-else>
          <EasyNoNotification :title="emptyTitle" :subtitle="emptySubtitle"/>
        </template>
      </div>
    </template>
  </EasyDropdown>
</template>

<style scoped lang="scss">

</style>
