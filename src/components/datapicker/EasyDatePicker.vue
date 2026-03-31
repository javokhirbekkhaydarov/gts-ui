<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel'
import Calendar, { type CalendarDateSlotOptions } from 'primevue/calendar'
import { type DatepickerModelType } from 'src/types/ui'
import { padStart } from '../../utils/string'
import { ref, watch } from 'vue'
import moment from 'moment'
import { useId } from 'vue'
import './EasyDatePicker.scss'

const model = defineModel<DatepickerModelType>()
const fromDate = ref<string>('')
const toDate = ref<string>('')

const {
  label,
  selectionMode = 'single',
  size = 'large',
} = defineProps<{
  label?: string
  size?: 'small' | 'large'
  placeholder?: string
  selectionMode?: 'multiple' | 'range' | 'single'
  minDate?: Date
  maxDate?: Date
  showIcon?: boolean
  timeOnly?: boolean
  invalid?: boolean
  disabled?: boolean
}>()
const id = useId()

function isSideDate(date: CalendarDateSlotOptions) {
  if (selectionMode !== 'range') return 'alone'
  const fullDate = `${padStart(date.day)}.${padStart(date.month + 1)}.${date.year}`
  if (fullDate === fromDate.value && toDate.value === '') {
    return 'alone'
  } else if (fullDate === fromDate.value) {
    return 'first'
  } else if (fullDate === toDate.value) {
    return 'last'
  }
}

function onChangeDatePicker(event: KeyboardEvent): void {
  const target = event.target as HTMLInputElement

  if (event.key === ' ') {
    event.preventDefault()
  }

  target.value = target.value.replace(/\s+/g, '')

  if (target.value !== target.value.replace(/[^0-9.]/g, '')) {
    target.value = target.value.replace(/[^0-9.]/g, '')
  }

  if ([2, 5].includes(target.value.replace(/[^0-9.]/g, '').length)) {
    target.value += '.'
  }
}

watch(model, (val) => {
  if (val && selectionMode === 'range') {
    const arr = val as string[]
    if (arr[0]) {
      fromDate.value = moment(arr[0]).format('DD.MM.YYYY')
    }
    if (arr[1]) {
      toDate.value = moment(arr[1]).format('DD.MM.YYYY')
    }
  }
})
</script>

<template>
  <FloatLabel :class="['easy-input w-full easy-datepicker', size, { 'has-label': label }]">
    <Calendar
      v-model="model"
      :selection-mode="selectionMode"
      :inputId="id"
      :placeholder="placeholder"
      :min-date="minDate ? moment(minDate).toDate() : undefined"
      :max-date="maxDate ? moment(maxDate).toDate() : undefined"
      :class="['w-full dp-flight']"
      date-format="dd.mm.yy"
      :showIcon="showIcon"
      :timeOnly="timeOnly"
      iconDisplay="input"
      append-to="self"
      v-bind="$attrs"
      :invalid="invalid"
      :disabled="disabled"
      @keypress="onChangeDatePicker"
    >
      <template #inputicon>
        <i
          v-if="timeOnly"
          class="icon-Outline-TimeCircle dp-flight-icon"
          :class="{ 'easy-datepicker__error': invalid }"
        ></i>
        <i v-else class="icon-Outline-Calendar dp-flight-icon" :class="{ 'easy-datepicker__error': invalid }"></i>
      </template>
      <template #date="{ date }">
        <div :class="['day center', isSideDate(date)]">
          {{ date.day }}
        </div>
      </template>
    </Calendar>
    <label v-if="label" :for="id">{{ label }}</label>
  </FloatLabel>
</template>
