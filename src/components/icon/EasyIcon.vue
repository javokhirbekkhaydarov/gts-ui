<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /**
   * Name of the icon to display
   * Can be used with or without 'icon-' prefix
   * @example 'Search' or 'icon-Search'
   */
  name: string;
  /**
   * Size of the icon in pixels
   * @default 16
   */
  size?: number;
  /**
   * Color of the icon
   * @default 'currentColor'
   */
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
  color: 'currentColor'
});

const iconName = computed(() => `icon-${props.name.replace(/^icon-/, '')}`);

const style = computed(() => ({
  fontSize: `${props.size}px`,
  color: props.color,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: `${props.size}px`,
  height: `${props.size}px`
}));

type MultiPathIconsType = {
  [key: string]: number;
};

const multiPathIcons: MultiPathIconsType = {
  'uzbekistan': 18,
  'russia': 3,
  'united-kingdom': 14,
  'Bold-Bag': 3,
  'Bold-Calendar': 7,
  'Bold-Camera': 4,
  'Bold-Chart': 4,
  'Bold-Chat': 4,
  'Bold-Discount': 3,
  'Bold-Document': 4,
  'Bold-help-circle': 3,
  'Bold-MoreCircle': 4,
  'Bold-MoreSquare': 4,
  'Bold-Paper': 3,
  'Outline-Chair': 4
};

const cleanIconName = computed(() => props.name.replace(/^icon-/, ''));

const isMultiPath = computed(() => multiPathIcons[cleanIconName.value] > 0);

const pathCount = computed(() => multiPathIcons[cleanIconName.value] || 0);

const paths = computed(() =>
  Array.from({ length: pathCount.value }, (_, i) => i + 1)
);
</script>

<template>
  <span
    :class="iconName"
    :style="style"
  >
    <template v-if="isMultiPath">
      <span
        v-for="n in paths"
        :key="n"
        :class="`path${n}`"
        :style="style"
      />
    </template>
    <slot v-else />
  </span>
</template>

<style scoped>
.multi-path {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.multi-path [class^="path"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
