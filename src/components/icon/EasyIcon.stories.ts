import type { Meta, StoryFn } from '@storybook/vue3';
import EasyIcon from './EasyIcon.vue';

const meta = {
  title: 'Components/EasyIcon',
  component: EasyIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Bold-Search',
        'Bold-Home',
        'Outline-Search',
        'Outline-Home',
        'russia',
        'uzbekistan',
        'united-kingdom',
        'Bold-Chat',
        'Bold-Call',
        'Bold-Calling',
        'travelOutline-traine1',
        'travelOutline-hotel',
        'travelOutline-plane'
      ],
      description: 'Icon name (can be used with or without "icon-" prefix)'
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 4 }
    },
    color: {
      control: 'color'
    }
  }
} satisfies Meta<typeof EasyIcon>;

export default meta;

export const Default: StoryFn = () => ({
  components: { EasyIcon },
  template: '<EasyIcon name="Bold-Home" :size="24" color="var(--icon-default)" />'
});

export const MultiPathIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="russia" :size="32" />
        <span>Russia</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="uzbekistan" :size="32" />
        <span>Uzbekistan</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="united-kingdom" :size="32" />
        <span>UK</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Bold-Chat" :size="32" />
        <span>Bold-Chat</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="icon-Outline-tropical" :size="32" />
        <span>Travel Tropical</span>
      </div>
    </div>
  `
});

export const ColoredIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <EasyIcon name="Bold-Chat" :size="32" color="#FF0000" />
      <EasyIcon name="Bold-Call" :size="32" color="#00FF00" />
      <EasyIcon name="Bold-Calling" :size="32" color="#0000FF" />
    </div>
  `
});

export const ColoredMultipathIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <EasyIcon name="Bold-Chat" :size="32" color="#FF0000" />
      <EasyIcon name="Bold-Calendar" :size="32" color="#00FF00" />
      <EasyIcon name="Bold-Camera" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-Chart" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-Bag" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-Discount" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-Document" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-help-circle" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-MoreCircle" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-MoreSquare" :size="32" color="#0000FF" />
      <EasyIcon name="Bold-Paper" :size="32" color="#0000FF" />
      <EasyIcon name="Outline-Chair" :size="32" color="#0000FF" />
      <EasyIcon name="icon-Outline-tropical" :size="32" color="#0000FF" />
    </div>
  `
});

export const OutlineIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <EasyIcon name="Outline-Chat" :size="32" color="#FF0000" />
      <EasyIcon name="Outline-Call" :size="32" color="#00FF00" />
      <EasyIcon name="Outline-Search" :size="32" color="#0000FF" />
    </div>
  `
});

export const TravelIcons: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: center;">
      <EasyIcon name="travelOutline-traine1" :size="32" color="#FF0000" />
      <EasyIcon name="travelOutline-hotel" :size="32" color="#00FF00" />
      <EasyIcon name="travelOutline-plane" :size="32" color="#0000FF" />
    </div>
  `
});

export const Sizes: StoryFn = () => ({
  components: { EasyIcon },
  template: `
    <div style="display: flex; gap: 16px; align-items: flex-end;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Bold-Home" :size="16" color="var(--icon-default)" />
        <span>16px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Bold-Home" :size="24" color="var(--icon-default)" />
        <span>24px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Bold-Home" :size="32" color="var(--icon-default)" />
        <span>32px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <EasyIcon name="Bold-Home" :size="48" color="var(--icon-default)" />
        <span>48px</span>
      </div>
    </div>
  `
});
