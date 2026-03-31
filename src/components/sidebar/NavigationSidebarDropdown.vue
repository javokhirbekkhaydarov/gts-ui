<script lang="ts" setup>
import {ISidebarItem} from '@/types/ui'
import {computed, ref} from 'vue'

const open = ref(false)

const props = defineProps<{
  item: ISidebarItem
  expand?: boolean
  routeName: string
}>()

const name = computed(()=>{
  return props.routeName.replace(/^\//, "")
})
</script>

<template>
  <div :class="['navigation-sidebar-dropdown', { expand }]">
    <div class="navigation-sidebar-dropdown__trigger no-hover" @click="open = !open">
      <span>{{ item.label }}</span>
      <i v-if="expand" class="icon-Outline-More-vertical"></i>
      <i v-else-if="open" class="icon-Outline-Arrow-Up2"></i>
      <i v-else class="icon-Outline-Arrow-Down2"></i>
    </div>

    <Transition name="slide-fade">
      <div v-if="open" class="navigation-sidebar-dropdown__menu">
        <template v-for="child of props.item.children" :key="child.path">
          <template v-if="child.path">
            <router-link
              v-if="child.internal"
              :to="child.path"
              :class="['navigation-sidebar-dropdown__trigger ', { active: child?.pages?.includes(name)}]"
              style="padding-left: 24px"
            >
              {{ child.label }}
            </router-link>
            <a
              v-else
              :href="child.path"
              :class="['navigation-sidebar-dropdown__trigger ', { active: child?.pages?.includes(name)}]"
            >
              {{ child.label }}
            </a>
          </template>
          <div v-else class="navigation-sidebar-dropdown__trigger no-hover disabled" style="padding-left: 24px">
            {{ child.label }}
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>


<style scoped lang="scss">
.active {
  color: var(--text-selected) !important;
}
</style>
