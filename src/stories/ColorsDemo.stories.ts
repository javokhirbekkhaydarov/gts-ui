import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref, computed } from 'vue';
import './colors-demo.scss';

const ColorsDemo = defineComponent({
  name: 'ColorsDemo',
  setup() {
    const searchQuery = ref('');

    // Базовые цвета
    const baseColors = [
      // Черные оттенки
      { name: '--black-50', value: '#e9e9e9' },
      { name: '--black-100', value: '#bababa' },
      { name: '--black-200', value: '#999999' },
      { name: '--black-300', value: '#6a6a6a' },
      { name: '--black-400', value: '#4d4d4d' },
      { name: '--black-500', value: '#212121' },
      { name: '--black-600', value: '#1e1e1e' },
      { name: '--black-700', value: '#171717' },
      { name: '--black-800', value: '#121212' },
      { name: '--black-900', value: '#0e0e0e' },

      // Синие оттенки
      { name: '--blue-50', value: '#e9f2ff' },
      { name: '--blue-100', value: '#e9f2ff' },
      { name: '--blue-200', value: '#cce0ff' },
      { name: '--blue-300', value: '#85b8ff' },
      { name: '--blue-400', value: '#579dff' },
      { name: '--blue-600', value: '#1d7afc' },
      { name: '--blue-700', value: '#0c66e4' },
      { name: '--blue-800', value: '#0055cc' },
      { name: '--blue-900', value: '#09326c' },
      { name: '--blue-1000', value: '#1c2b41' },
      { name: '--blue-teal-500', value: '#388bff' },

      // Коричневые оттенки
      { name: '--brown-50', value: '#fff7ed' },
      { name: '--brown-100', value: '#ffeed5' },
      { name: '--brown-200', value: '#f7d1b5' },
      { name: '--brown-300', value: '#ffbd72' },
      { name: '--brown-400', value: '#fd973a' },
      { name: '--brown-500', value: '#fc7913' },
      { name: '--brown-600', value: '#ed5d09' },
      { name: '--brown-700', value: '#c4450a' },
      { name: '--brown-800', value: '#9c3610' },
      { name: '--brown-900', value: '#7d2f11' },

      // Зеленые оттенки
      { name: '--green-50', value: '#dcfff1' },
      { name: '--green-100', value: '#bce6ce' },
      { name: '--green-200', value: '#ace7c2' },
      { name: '--green-300', value: '#6ec994' },
      { name: '--green-400', value: '#52be80' },
      { name: '--green-500', value: '#27ae60' },
      { name: '--green-600', value: '#239e57' },
      { name: '--green-700', value: '#1c7c44' },
      { name: '--green-800', value: '#156035' },
      { name: '--green-900', value: '#104928' },
      { name: '--green-bolder', value: '#2ABB7F' },

      // Серые оттенки
      { name: '--grey-50', value: '#edeef0' },
      { name: '--grey-100', value: '#d0d5dd' },
      { name: '--grey-200', value: '#aab1ba' },
      { name: '--grey-300', value: '#475569cc' },
      { name: '--grey-400', value: '#6c7787' },
      { name: '--grey-500', value: '#475569' },
      { name: '--grey-600', value: '#414d60' },
      { name: '--grey-700', value: '#323c4b' },
      { name: '--grey-800', value: '#272f3a' },
      { name: '--grey-900', value: '#1e242c' },

      // Нейтральные оттенки
      { name: '--neutral-0', value: '#ffffff' },
      { name: '--neutral-100', value: '#f9fafc' },
      { name: '--neutral-200', value: '#f1f2f4' },
      { name: '--neutral-300', value: '#dcdfe4' },
      { name: '--neutral-400', value: '#b3b9c4' },
      { name: '--neutral-500', value: '#8590a2' },
      { name: '--neutral-600', value: '#758195' },
      { name: '--neutral-700', value: '#626f86' },
      { name: '--neutral-800', value: '#44546f' },
      { name: '--neutral-900', value: '#2c3e5d' },
      { name: '--neutral-1000', value: '#172b4d' },
      { name: '--neutral-1100', value: '#091e42' },

      // Красные оттенки
      { name: '--red-50', value: '#fff1f5' },
      { name: '--red-100', value: '#fde5ec' },
      { name: '--red-200', value: '#ffd5e2' },
      { name: '--red-300', value: '#f6799f' },
      { name: '--red-400', value: '#f55f8c' },
      { name: '--red-500', value: '#f2376f' },
      { name: '--red-600', value: '#dc3265' },
      { name: '--red-700', value: '#ac274f' },
      { name: '--red-800', value: '#851e3d' },
      { name: '--red-900', value: '#66172f' },

      // Бирюзовые оттенки
      { name: '--teal-100', value: '#e2f3ff' },
      { name: '--teal-200', value: '#c6edfb' },
      { name: '--teal-300', value: '#9dd9ee' },
      { name: '--teal-400', value: '#6cc3e0' },
      { name: '--teal-500', value: '#42b2d7' },
      { name: '--teal-600', value: '#2898bd' },
      { name: '--teal-700', value: '#227d9b' },
      { name: '--teal-800', value: '#206a83' },
      { name: '--teal-900', value: '#164555' },
      { name: '--teal-1000', value: '#1e3137' },

      // Желтые оттенки
      { name: '--yellow-50', value: '#fffae6' },
      { name: '--yellow-100', value: '#ffefb0' },
      { name: '--yellow-200', value: '#ffe78a' },
      { name: '--yellow-300', value: '#ffdb54' },
      { name: '--yellow-400', value: '#ffd533' },
      { name: '--yellow-500', value: '#ffca00' },
      { name: '--yellow-600', value: '#e8b800' },
      { name: '--yellow-700', value: '#b58f00' },
      { name: '--yellow-800', value: '#8c6f00' },
      { name: '--yellow-900', value: '#6b5500' },

      // Основные цвета
      { name: '--base-white', value: '#ffffff' },
      { name: '--brand', value: '#00B7DA' },
      { name: '--accent-blue', value: '#0A7494' }
    ];

    // CSS переменные, которые ссылаются на другие переменные
    const cssVariables = [
      // Background
      { name: '--background-accent-gray-default', value: 'var(--grey-500)' },
      { name: '--background-accent-gray-bolder-default', value: 'var(--neutral-700)' },
      { name: '--background-accent-gray-subtle-default', value: 'var(--neutral-500)' },
      { name: '--background-accent-gray-subtler-default', value: 'var(--neutral-300)' },
      { name: '--background-accent-gray-subtlest-default', value: 'var(--neutral-200)' },
      { name: '--background-accent-green-bold', value: 'var(--green-500)' },
      { name: '--background-accent-green-subtle', value: 'var(--green-100)' },
      { name: '--background-accent-green-subtlest', value: 'var(--green-50)' },
      { name: '--background-accent-navy-bold', value: 'var(--navy-500)' },
      { name: '--background-accent-navy-subtle', value: 'var(--navy-200)' },
      { name: '--background-accent-navy-subtler', value: 'var(--navy-100)' },
      { name: '--background-accent-navy-subtlest', value: 'var(--navy-50)' },
      { name: '--background-accent-orange-bold', value: 'var(--brown-500)' },
      { name: '--background-accent-orange-subtle', value: 'var(--brown-200)' },
      { name: '--background-accent-orange-subtlest', value: 'var(--brown-50)' },
      { name: '--background-accent-purple-default', value: '#6e5dc6' },
      { name: '--background-accent-red-bold', value: 'var(--red-500)' },
      { name: '--background-accent-red-subtle', value: 'var(--red-200)' },
      { name: '--background-accent-red-subtler', value: 'var(--red-100)' },
      { name: '--background-accent-red-subtlest', value: 'var(--red-50)' },
      { name: '--background-brand-bold-default', value: 'var(--teal-500)' },
      { name: '--background-brand-bold-hovered', value: 'var(--teal-600)' },
      { name: '--background-brand-bold-pressed', value: 'var(--teal-700)' },
      { name: '--background-brand-subtlest-default', value: 'var(--blue-100)' },
      { name: '--background-brand-subtlest-hovered', value: 'var(--blue-200)' },
      { name: '--background-brand-subtlest-pressed', value: 'var(--blue-300)' },
      { name: '--background-danger-default', value: 'var(--red-500)' },
      { name: '--background-danger-hovered', value: 'var(--red-600)' },
      { name: '--background-danger-pressed', value: 'var(--red-700)' },
      { name: '--background-discovery-default', value: 'var(--navy-500)' },
      { name: '--background-discovery-hovered', value: 'var(--navy-600)' },
      { name: '--background-discovery-pressed', value: 'var(--navy-700)' },
      { name: '--background-information-default', value: 'var(--blue-100)' },
      { name: '--background-information-hovered', value: 'var(--blue-200)' },
      { name: '--background-information-pressed', value: 'var(--blue-300)' },
      { name: '--background-input-default', value: 'var(--neutral-0)' },
      { name: '--background-input-hovered', value: 'var(--neutral-100)' },
      { name: '--background-input-pressed', value: 'var(--neutral-0)' },
      { name: '--background-neutral-default', value: 'var(--alpha-neutral200a)' },
      { name: '--background-neutral-disabled', value: 'var(--alpha-neutral100a)' },
      { name: '--background-neutral-hovered', value: 'var(--alpha-neutral300a)' },
      { name: '--background-neutral-pressed', value: 'var(--alpha-neutral400a)' },
      { name: '--background-neutral-bold-default', value: 'var(--grey-500)' },
      { name: '--background-neutral-bold-hovered', value: 'var(--grey-600)' },
      { name: '--background-neutral-bold-pressed', value: 'var(--grey-700)' },
      { name: '--background-neutral-subtle-default', value: 'var(--alpha-neutral100a)' },
      { name: '--background-neutral-subtle-hovered', value: 'var(--alpha-neutral200a)' },
      { name: '--background-neutral-subtle-pressed', value: 'var(--alpha-neutral300a)' },
      { name: '--background-selected-default', value: 'var(--teal-100)' },
      { name: '--background-selected-hovered', value: 'var(--teal-200)' },
      { name: '--background-selected-pressed', value: 'var(--teal-300)' },
      { name: '--background-success-bold-default', value: 'var(--green-700)' },
      { name: '--background-success-bold-hovered', value: 'var(--green-800)' },
      { name: '--background-success-bold-pressed', value: 'var(--green-900)' },
      { name: '--background-brand', value: 'var(--brand)' },

      // Border
      { name: '--border-bold', value: 'var(--cadet-blue-300)' },
      { name: '--border-bolder', value: 'var(--cadet-blue-400)' },
      { name: '--border-brand', value: 'var(--teal-500)' },
      { name: '--border-danger', value: 'var(--red-500)' },
      { name: '--border-default', value: 'var(--cadet-blue-200)' },
      { name: '--border-disabled', value: 'var(--alpha-neutral200a)' },
      { name: '--border-focused', value: 'var(--teal-500)' },
      { name: '--border-selected', value: 'var(--teal-500)' },
      { name: '--border-accent-green-default', value: 'var(--green-500)' },
      { name: '--border-accent-green-subtle', value: 'var(--green-200)' },
      { name: '--border-accent-navy-default', value: 'var(--navy-500)' },
      { name: '--border-accent-navy-subtle', value: 'var(--navy-100)' },
      { name: '--border-accent-navy-subtler', value: 'var(--navy-200)' },
      { name: '--border-accent-orange-default', value: 'var(--brown-500)' },
      { name: '--border-accent-orange-subtle', value: 'var(--brown-200)' },
      { name: '--border-accent-yellow-default', value: 'var(--yellow-500)' },

      // Icon
      { name: '--icon-danger', value: 'var(--red-500)' },
      { name: '--icon-default', value: 'var(--black-500)' },
      { name: '--icon-disabled', value: 'var(--alpha-neutral400a)' },
      { name: '--icon-discover', value: 'var(--navy-500)' },
      { name: '--icon-information', value: 'var(--teal-500)' },
      { name: '--icon-inverse', value: 'var(--base-white)' },
      { name: '--icon-selected', value: 'var(--teal-500)' },
      { name: '--icon-subtle', value: 'var(--grey-500)' },
      { name: '--icon-subtlest', value: 'var(--grey-300)' },
      { name: '--icon-success', value: 'var(--green-500)' },
      { name: '--icon-warning', value: 'var(--brown-500)' },
      { name: '--icon-accent-blue', value: 'var(--teal-500)' },
      { name: '--icon-accent-green', value: 'var(--green-500)' },
      { name: '--icon-accent-navy', value: 'var(--navy-700)' },
      { name: '--icon-accent-orange', value: 'var(--brown-400)' },
      { name: '--icon-accent-red', value: 'var(--red-500)' },
      { name: '--icon-brand-default', value: 'var(--teal-500)' },
      { name: '--icon-brand-hovered', value: 'var(--teal-600)' },
      { name: '--icon-brand-pressed', value: 'var(--teal-700)' },

      // Link
      { name: '--link-default', value: 'var(--blue-teal-500)' },
      { name: '--link-hovered', value: 'var(--blue-600)' },
      { name: '--link-pressed', value: 'var(--blue-700)' },
      { name: '--link-visited', value: 'var(--purple-700)' },

      // Text
      { name: '--text-danger', value: 'var(--red-500)' },
      { name: '--text-default', value: 'var(--black-500)' },
      { name: '--text-disabled', value: 'var(--alpha-neutral400a)' },
      { name: '--text-inverse', value: 'var(--neutral-0)' },
      { name: '--text-selected', value: 'var(--teal-500)' },
      { name: '--text-subtle', value: 'var(--neutral-800)' },
      { name: '--text-subtlest', value: 'var(--neutral-700)' },
      { name: '--text-sucsess', value: 'var(--green-500)' },
      { name: '--text-waring', value: 'var(--brown-600)' },
      { name: '--text-accent-blue-blue', value: 'var(--teal-700)' },
      { name: '--text-accent-blue', value: 'var(--accent-blue)' },
      { name: '--text-accent-green-bolder', value: 'var(--green-700)' },
      { name: '--text-accent-green-boldered', value: 'var(--green-800)' },
      { name: '--text-accent-green-default', value: 'var(--green-600)' },
      { name: '--text-accent-orange-default', value: 'var(--brown-600)' },
      { name: '--text-accent-purple-bold', value: 'var(--navy-800)' },
      { name: '--text-accent-purple-default', value: 'var(--navy-500)' },
      { name: '--text-accent-red-red', value: 'var(--red-500)' },
      { name: '--text-accent-teal-default', value: 'var(--teal-500)' },
      { name: '--text-accent-yellow-yellow', value: 'var(--yellow-500)' },
      { name: '--text-brand-default', value: 'var(--teal-500)' },
      { name: '--text-brand-hovered', value: 'var(--teal-600)' },
      { name: '--text-brand-pressed', value: 'var(--teal-700)' },
      { name: '--text-green-bolder', value: 'var(--green-bolder)' },

      // Elevation
      { name: '--elevation-surface-blanket', value: '#475569cc' },
      { name: '--elevation-surface-default', value: '#f1f8fd' },
      { name: '--elevation-surface-overlay', value: '#ffffff' },
      { name: '--elevation-surface-subtle', value: '#ffffffb2' },
      { name: '--elevation-surface-subtler', value: '#ffffff59' },
      { name: '--elevation-surface-sunken', value: '#F7F8F9' },

      // Alpha
      { name: '--alpha-dark-neutral-100a', value: '#03040442' },
      { name: '--alpha-dark-neutral100a', value: '#bcd6f00a' },
      { name: '--alpha-dark-neutral200a', value: '#a1bdd914' },
      { name: '--alpha-dark-neutral250a', value: '#c8e1f91a' },
      { name: '--alpha-dark-neutral300a', value: '#a6c5e229' },
      { name: '--alpha-dark-neutral350a', value: '#c3defe33' },
      { name: '--alpha-dark-neutral400a', value: '#bfdbf847' },
      { name: '--alpha-dark-neutral500a', value: '#9bb4ca80' },
      { name: '--alpha-neutral100a', value: '#091e4208' },
      { name: '--alpha-neutral200a', value: '#091e420f' },
      { name: '--alpha-neutral300a', value: '#091e4224' },
      { name: '--alpha-neutral400a', value: '#091e424f' },
      { name: '--alpha-neutral500a', value: '#091e427d' }
    ];

    // Объединяем все переменные
    const allVariables = [...baseColors, ...cssVariables];

    // Фильтрация переменных по поисковому запросу
    const filteredVariables = computed(() => {
      if (!searchQuery.value) return allVariables;

      const query = searchQuery.value.toLowerCase();
      return allVariables.filter(variable =>
        variable.name.toLowerCase().includes(query)
      );
    });

    // Группировка переменных по категориям
    const groupedVariables = computed(() => {
      const groups: { [key: string]: typeof allVariables } = {};

      filteredVariables.value.forEach(variable => {
        const category = variable.name.split('-')[1] || 'other';
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(variable);
      });

      return groups;
    });

    const copyToClipboard = async (name: string) => {
      try {
        await navigator.clipboard.writeText(name);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return {
      searchQuery,
      filteredVariables,
      copyToClipboard,
      groupedVariables
    };
  },
  template: `
    <div class="colors-demo">
      <h1>CSS Переменные</h1>
      <p>Демонстрация всех доступных CSS переменных в дизайн-системе.</p>

      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Поиск переменных..."
          class="color-search-input"
        />
        <span class="color-count">
          {{ filteredVariables.length }} переменных
        </span>
      </div>

      <div v-for="(variables, category) in groupedVariables" :key="category" class="category-section">
        <div class="colors-grid">
          <div
            v-for="variable in variables"
            :key="variable.name"
            class="color-item"
            @click="copyToClipboard(variable.name)"
          >
            <div
              class="color-preview"
              :style="{ backgroundColor: variable.value }"
            ></div>
            <div class="color-info">
              <div class="color-name">{{ variable.name }}</div>
              <code class="color-value">{{ variable.value }}</code>
            </div>
          </div>∆
        </div>
      </div>
    </div>
  `
});

const meta: Meta<typeof ColorsDemo> = {
  title: 'Design System/Colors',
  component: ColorsDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Демонстрация всех доступных CSS переменных в дизайн-системе.'
      }
    }
  }
};

export default meta;

export const AllColors: StoryFn<typeof ColorsDemo> = () => ({
  components: { ColorsDemo },
  template: '<ColorsDemo />'
});
