<script lang="ts" setup>
import OverlayPanel from 'primevue/overlaypanel'
import { ComputedRef, inject, ref, watch } from 'vue'
import NavigationSidebarDropdown from './NavigationSidebarDropdown.vue'
import { ISidebarItem } from '@/types/ui'

const op = ref()

const props = defineProps<{
  routeItem: ISidebarItem
  isChild: boolean
  routeName: string
  short: boolean
}>()
const emits = defineEmits(['parentClick'])
const isContract = inject<ComputedRef<boolean>>('isContract')

const tagAndAttribute = (routeItem: ISidebarItem): { tag: string; attribute: Record<string, unknown> } => {
  if (routeItem.children?.length) {
    return { tag: 'div', attribute: {} }
  }

  if (isContract?.value) {
    return { tag: 'a', attribute: { href: routeItem.path } }
  }

  if (routeItem.internal) {
    return { tag: 'router-link', attribute: { to: routeItem.path } }
  }
  return { tag: 'a', attribute: { href: routeItem.path } }
}

function isActive(pages: string[]) {
  return pages.includes(props.routeName)
}

function getIcon(route: ISidebarItem) {
  return isActive(route.pages ?? []) ? route.activeIcon : route.icon
}

function toggle(event: unknown) {
  op.value.toggle(event)
}

function hasChilden(routeItem: ISidebarItem) {
  if (routeItem.children && routeItem.children.length > 0) {
    emits('parentClick', routeItem.children)
  }
}

watch(
  () => props.routeName,
  () => {
    op.value.hide()
  },
)
</script>

<template>
  <template v-if="routeItem">
    <div
      v-if="short && routeItem?.children"
      :class="['navigation-sidebar__link', { active: routeItem.pages.includes(routeName) }]"
      @click="toggle"
    >
      <i v-if="routeItem?.icon" :class="[getIcon(routeItem), 'navigation-sidebar__icon']"></i>
      <i class="icon-Outline-More-vertical navigation-sidebar__more"></i>
    </div>

    <NavigationSidebarDropdown v-else-if="isChild && routeItem?.children" expand :item="routeItem" :routeName />

    <component
      v-else
      :is="tagAndAttribute(routeItem).tag"
      v-bind="tagAndAttribute(routeItem).attribute"
      @click="hasChilden(routeItem)"
      v-tooltip="{ value: routeItem.label, disabled: !short || !!routeItem?.children }"
      :class="[
        'navigation-sidebar__link',
        { active: isActive(routeItem?.pages) },
        { 'pointer-events-none': routeItem.disabled },
      ]"
    >
      <i v-if="routeItem?.icon" :class="[getIcon(routeItem), 'navigation-sidebar__icon']"></i>
      <span v-if="!short">{{ routeItem.label }}</span>
      <i v-if="routeItem?.children" class="icon-Outline-More-vertical navigation-sidebar__more"></i>
    </component>

    <OverlayPanel ref="op" append-to="self" class="sidebar-op">
      <section v-if="routeItem?.children" class="sidebar-short-items">
        <template v-for="(item, j) of routeItem.children" :key="`${j}-${item.path}`">
          <NavigationSidebarDropdown v-if="item?.children" :item="item" :routeName="routeName" />
          <component
            v-else-if="item.path"
            :is="tagAndAttribute(item).tag"
            v-bind="tagAndAttribute(item).attribute"
            :class="['sidebar-short-items__link', { active: isActive(routeItem.pages) }]"
          >
            {{ item.label }}
          </component>
          <div v-else class="sidebar-short-items__link disabled">
            {{ item.label }}
          </div>
        </template>
      </section>
    </OverlayPanel>
  </template>
</template>

<style lang="scss"></style>
