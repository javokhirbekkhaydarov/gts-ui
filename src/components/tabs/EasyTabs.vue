<script setup lang="ts">
import { useId, ref, computed, onMounted, onUnmounted, nextTick, watch } from "vue";
import type { IItem } from "src/types/ui";
import './EasyTabs.scss'
import EasyIcon from "../icon/EasyIcon.vue";
import EasyDropdown from "../dropdown/EasyDropdown.vue";
import Skeleton from 'primevue/skeleton';
import { lang } from "@/constants/lang";
import { inject } from "vue";
import { LocaleTypes } from "@/types";
import type { ComputedRef } from "vue";

const props = withDefaults(defineProps<{
  items: IItem[]
  loading?: boolean
  big?: boolean
}>(), {
  big: false
})

const model = defineModel()
const id = useId()

const locale = inject<ComputedRef<LocaleTypes>>('locale') || ref('ru')

// Элементы для видимых и скрытых табов
const tabsContainer = ref<HTMLElement | null>(null)
const visibleTabs = ref<IItem[]>([])
const hiddenTabs = ref<IItem[]>([])
const showMoreButton = ref(false)
const isMoreActive = computed(() => {
  return hiddenTabs.value.some(tab => tab.value === model.value)
})

// Функция для обработки изменения размеров
let resizeObserver: ResizeObserver | null = null

// Определяем, какие табы помещаются в контейнер
const updateVisibleTabs = () => {
  if (!tabsContainer.value) return

  // Сбрасываем видимые и скрытые табы
  visibleTabs.value = [...props.items]
  hiddenTabs.value = []
  showMoreButton.value = false

  nextTick(() => {
    if (!tabsContainer.value) return

    // Получаем доступную ширину контейнера
    const containerWidth = tabsContainer.value.clientWidth
    const tabElements = Array.from(tabsContainer.value.querySelectorAll('.tab-item'))
    const moreButtonWidth = 70 // Примерная ширина кнопки "Ещё"

    let totalWidth = 0
    let breakIndex = tabElements.length

    // Вычисляем, сколько табов поместится
    for (let i = 0; i < tabElements.length; i++) {
      const tabWidth = tabElements[i].getBoundingClientRect().width

      // Если следующий таб не поместится (учитывая место для кнопки "Ещё")
      if (totalWidth + tabWidth + (i < tabElements.length - 1 ? moreButtonWidth : 0) > containerWidth) {
        breakIndex = i
        break
      }

      totalWidth += tabWidth
    }

    // Если не все табы помещаются
    if (breakIndex < tabElements.length) {
      visibleTabs.value = props.items.slice(0, breakIndex)
      hiddenTabs.value = props.items.slice(breakIndex)
      showMoreButton.value = true
    }
  })
}

// Инициализация ResizeObserver
onMounted(() => {
  resizeObserver = new ResizeObserver(updateVisibleTabs)
  if (tabsContainer.value) {
    resizeObserver.observe(tabsContainer.value)
  }
  updateVisibleTabs()
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})

// Обновляем при изменении списка табов
watch(() => props.items, updateVisibleTabs, { deep: true })

// Функция для выбора таба из выпадающего меню
const selectTab = (tab: IItem) => {
  if (tab.disabled) return
  model.value = tab.value
}
</script>

<template>
  <div ref="tabsContainer" :class="['easy-tabs', { big }]" :style="`--count: ${visibleTabs.length + (showMoreButton ? 1 : 0)};`">

      <div v-if="loading" class="flex items-center" style="gap: 4px">
        <Skeleton v-for="i in 8" :key="i" width="130px" height="40px"/>
      </div>
      <template v-for="item of visibleTabs" :key="item.value" v-else>
        <input
          v-model="model"
          :value="item.value"
          :name="id"
          :id="`${id}${item.value}`"
          type="radio"
          class="input"
        />
        <label
          :for="`${id}${item.value}`"
          :class="['label', 'tab-item', { disabled: item?.disabled }, {active: item.value === model}]"
        >
          <EasyIcon v-if="item?.icon" :name="item.icon" :size="20"></EasyIcon>
          <span class="label__text" v-html="item.label"/>
        </label>
      </template>


    <!-- Кнопка "Ещё" с выпадающим меню -->
    <div v-if="showMoreButton" class="tab-item center">
      <EasyDropdown dropdown-class="tabs-dropdown">
        <template #trigger>
          <div :class="['more-button', { active: isMoreActive }]">
            <span>{{ lang[locale].tabs.more }}</span>
            <span class="count">{{ hiddenTabs.length }}</span>
          </div>
        </template>

        <div class="hidden-tabs-menu">
          <div
            v-for="tab in hiddenTabs"
            :key="tab.value"
            :class="['hidden-tab-item', { disabled: tab?.disabled }, { active: tab.value === model }]"
            @click="selectTab(tab)"
          >
            <EasyIcon v-if="tab?.icon" :name="tab.icon" :size="16"></EasyIcon>
            <span v-html="tab.label"></span>
          </div>
        </div>
      </EasyDropdown>
    </div>
  </div>
</template>

<style lang="scss">
.tabs-dropdown {
  .p-overlaypanel-content {
    padding: 4px;
    border-radius: 8px;
  }
}
.more-button {
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  user-select: none;
  color: var(--text-subtle);
  display: flex;
  align-items: center;
  gap: 4px;
  &.active {
    height: 46px;
  }
  .count {
    color: var(--text-default);
    font-size: 12px;
    background: var(--background-neutral-default);
    padding: 2px 6px;
    line-height: 12px;
    border-radius: 14px;
  }

  &.active {
    color: var(--text-default);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: var(--border-selected);
    }
  }

  &:hover {
    color: var(--text-default);
  }
}

.hidden-tabs-menu {
  min-width: 150px;
  max-width: 300px;

  .hidden-tab-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    cursor: pointer;
    border-radius: 8px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-subtle);

    &:hover {
      background-color: var(--background-neutral-subtle-hovered);
    }

    &.disabled {
      cursor: not-allowed;
      color: var(--text-disabled);
      pointer-events: none;
    }

    &.active {
      color: var(--text-default);
      background-color: var(--background-neutral-subtle-hovered);
    }
  }
}
</style>
