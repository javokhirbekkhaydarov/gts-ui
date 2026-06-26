<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import './EasyBackground.css'
import { usePathBranding } from '@/composables/usePathBranding'

const props = defineProps<{
  routePath?: string
}>()

const { getBrandConfig, getBackgroundConfig } = usePathBranding()
const { hideBalls } = getBrandConfig()
const { backgroundImage, darkBackgroundImage } = getBackgroundConfig()

const isDark = ref(document.documentElement.classList.contains('dark-mode'))

const observer = new MutationObserver(() => {
  isDark.value = document.documentElement.classList.contains('dark-mode')
})

onMounted(() => {
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
  observer.disconnect()
})

const currentBgImage = computed(() => {
  if (isDark.value && darkBackgroundImage) return darkBackgroundImage
  return backgroundImage
})

const colors = ['violet', 'violet', 'grey', 'green', 'blue', 'orange', 'grey']
const minHeight = 125
const maxHeight = 660
const elements = ref<Element[]>([])

function generateSphere() {
  elements.value = []
  for (let i = 0; i < colors.length; i++) {
    const size = getRandomNumber(minHeight, maxHeight)
    const position = getPosition()
    elements.value.push({ size, className: colors[i], position })
  }
}

function getPosition() {
  const x = getRandomNumber(200, window.innerWidth)
  const y = getRandomNumber(-50, window.innerHeight)
  return [getPercentage(window.innerWidth, x), getPercentage(window.innerHeight, y)]
}

function getPercentage(total: number, val: number) {
  return Math.ceil((val * 100) / total) + '%'
}

function getRandomNumber(min: number, max: number) {
  const randomDecimal = Math.random()
  const range = max - min
  return Math.floor(randomDecimal * range) + min
}

watch(
  () => props.routePath,
  () => {
    generateSphere()
  },
)

onMounted(() => {
  generateSphere()
})

interface Element {
  size: number
  className: string
  position: string[]
}
</script>

<template>
  <div
    class="easy-background dynamic-bg"
    :class="[{ 'easy-background--shadow': false }, '']"
    :style="{
      backgroundColor: 'transparent',
      borderRadius: '0',
    }"
  >
    <img
      v-if="currentBgImage"
      :src="currentBgImage"
      style="object-fit: cover;"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <TransitionGroup v-if="!hideBalls" name="fade">
      <div
        v-for="el of elements"
        :class="['sphere', el.className]"
        :key="el.size"
        :style="{ width: `${el.size}px`, height: `${el.size}px`, left: el.position[0], top: el.position[1] }"
      ></div>
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss"></style>
