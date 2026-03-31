import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref, computed } from 'vue';
import './icons-demo.scss';
import EasyIcon from '../components/icon/EasyIcon.vue';

const IconsDemo = defineComponent({
  name: 'IconsDemo',
  components: {
    EasyIcon
  },
  setup() {
    // Icons with multiple paths need special handling
    const multiPathIcons = {
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
      'Outline-Chair': 4,
      'travelOutline-tropical': 5,
      'Outline-vana': 4,
      'Outline-tualit': 12
    };

    const icons = [
      // Флаги и страны
      'uzbekistan',
      'russia',
      'united-kingdom',

      // Travel Outline иконки
      'travelOutline-traine1',
      'travelOutline-hotel',
      'travelOutline-memo',
      'travelOutline-plane',
      'travelOutline-routing',
      'travelOutline-simcard',
      'travelOutline-transfer',

      'car',
      'GasPump',

      // Bold иконки
      'Bold-Create',
      'Bold-Arrow-LeftSquare',
      'Bold-Arrow-Right',
      'Bold-Arrow-Right2',
      'Bold-Arrow-Right3',
      'Bold-Arrow-RightCircle',
      'Bold-Arrow-RightSquare',
      'Bold-Arrow-Up',
      'Bold-Arrow-Up2',
      'Bold-Arrow-Up3',
      'Bold-Arrow-UpCircle',
      'Bold-Arrow-UpSquare',
      'Bold-Bag',
      'Bold-Bag2',
      'Bold-Bookmark',
      'Bold-Buy',
      'Bold-Calendar',
      'Bold-Call',
      'Bold-Calling',
      'Bold-CallMissed',
      'Bold-CallSilent',
      'Bold-Camera',
      'Bold-Card',
      'Bold-Category',
      'Bold-Chart',
      'Bold-Chat',
      'Bold-check-circle',
      'Bold-CloseSquare',
      'Bold-Danger',
      'Bold-Delete',
      'Bold-Discount',
      'Bold-Discovery',
      'Bold-Document',
      'Bold-Download',
      'Bold-Edit',
      'Bold-EditSquare',
      'Bold-Filter',
      'Bold-Filter2',
      'Bold-Folder',
      'Bold-global',
      'Bold-Graph',
      'Bold-Heart',
      'Bold-help-circle',
      'Bold-Hide',
      'Bold-Home',
      'Bold-Image',
      'Bold-Image2',
      'Bold-InfoCircle',
      'Bold-InfoSquare',
      'Bold-Location',
      'Bold-Lock',
      'Bold-Login',
      'Bold-Logout',
      'Bold-Message',
      'Bold-MoreCircle',
      'Bold-MoreSquare',
      'Bold-Notification',
      'Bold-Paper',
      'Bold-PaperDownload',
      'Bold-PaperFail',
      'Bold-PaperNegative',
      'Bold-PaperPlus',
      'Bold-PaperUpload',
      'Bold-Password',
      'Bold-Play',
      'Bold-Plus',
      'Bold-Profile',
      'Bold-receipt-search',
      'Bold-Scan',
      'Bold-Search',
      'Bold-Send',
      'Bold-Setting',
      'Bold-ShieldDone',
      'Bold-ShieldFail',
      'Bold-Show',
      'Bold-simcard',
      'Bold-Star',
      'Bold-Swap',
      'Bold-Ticket',
      'Bold-TicketStar',
      'Bold-TickSquare',
      'Bold-TimeCircle',
      'Bold-TimeSquare',
      'Bold-Unlock',
      'Bold-Upload',
      'Bold-User2',
      'Bold-User3',
      'Bold-Video',
      'Bold-Voice',
      'Bold-Voice2',
      'Bold-VolumeDown',
      'Bold-VolumeOff',
      'Bold-VolumeUp',
      'Bold-Wallet',
      'Bold-Work',
      'Bold-Activity',
      'Bold-AddUser',
      'Bold-Arrow-Down',
      'Bold-Arrow-Down2',
      'Bold-Arrow-Down3',
      'Bold-Arrow-DownCircle',
      'Bold-Arrow-DownSquare',
      'Bold-Arrow-Left',
      'Bold-Arrow-Left2',
      'Bold-Arrow-Left3',
      'Bold-Arrow-LeftCircle',
      'Bold-anchor',

      // Outline иконки
      'Outline-clipboard-text',
      'Outline-ship',
      'Outline-tropical',
      'Outline-arrowstwo',
      'Outline-Create',
      'Outline-tualit',
      'Outline-2User',
      'Outline-3User',
      'Outline-Activity',
      'Outline-AddIcon',
      'Outline-AddUser',
      'Outline-airlineSeat',
      'Outline-Arrow-Down',
      'Outline-Arrow-Down2',
      'Outline-Arrow-Down3',
      'Outline-Arrow-DownCircle',
      'Outline-Arrow-DownSquare',
      'Outline-Arrow-Left',
      'Outline-Arrow-Left2',
      'Outline-Arrow-Left3',
      'Outline-Arrow-LeftCircle',
      'Outline-Arrow-LeftSquare',
      'Outline-Arrow-Right',
      'Outline-Arrow-Right2',
      'Outline-Arrow-Right3',
      'Outline-Arrow-RightCircle',
      'Outline-Arrow-RightSquare',
      'Outline-Arrow-Up',
      'Outline-Arrow-Up2',
      'Outline-Arrow-Up3',
      'Outline-Arrow-UpCircle',
      'Outline-Arrow-UpSquare',
      'Outline-Bag',
      'Outline-Bag3',
      'Outline-Bookmark',
      'Outline-Booster',
      'Outline-Buy',
      'Outline-Calendar',
      'Outline-Calendar-number',
      'Outline-Call',
      'Outline-Calling',
      'Outline-CallMissed',
      'Outline-CallSilent',
      'Outline-Camera',
      'Outline-card',
      'Outline-Category',
      'Outline-Chair',
      'Outline-Chart',
      'Outline-Chat',
      'Outline-Close_SM',
      'Outline-CloseSquare',
      'Outline-DangerCircle',
      'Outline-DangerTriangle',
      'Outline-Delete',
      'Outline-Discount',
      'Outline-Discovery',
      'Outline-Document',
      'Outline-Download',
      'Outline-Download-cloud',
      'Outline-Edit',
      'Outline-EditSquare',
      'Outline-External_Link',
      'Outline-Filter',
      'Outline-Filter3',
      'Outline-Flag',
      'Outline-Folder',
      'Outline-global',
      'Outline-Graph',
      'Outline-Heart',
      'Outline-Help-circle',
      'Outline-Hide',
      'Outline-Home',
      'Outline-Image',
      'Outline-Image3',
      'Outline-InfoSquare',
      'Outline-Location',
      'Outline-Lock',
      'Outline-Login',
      'Outline-Logout',
      'Outline-Map',
      'Outline-Message',
      'Outline-message-text',
      'Outline-Minus',
      'Outline-MoreCircle',
      'Outline-MoreSquare',
      'Outline-More-vertical',
      'Outline-Notification',
      'Outline-Paper',
      'Outline-PaperDownload',
      'Outline-PaperFail',
      'Outline-PaperNegative',
      'Outline-PaperPlus',
      'Outline-PaperUpload',
      'Outline-Password',
      'Outline-Play',
      'Outline-Plus',
      'Outline-Profile',
      'Outline-Receipt-edit',
      'Outline-receipt-search',
      'Outline-Scan',
      'Outline-Search',
      'Outline-Send',
      'Outline-Setting',
      'Outline-share',
      'Outline-ShieldDone',
      'Outline-ShieldFail',
      'Outline-Show',
      'Outline-Shuffle',
      'Outline-Star',
      'Outline-Strongbox',
      'Outline-Swap',
      'Outline-Ticket',
      'Outline-TicketStar',
      'Outline-TickSquare',
      'Outline-TimeCircle',
      'Outline-TimeSquare',
      'Outline-u_check',
      'Outline-Unlock',
      'Outline-Upload',
      'Outline-Video',
      'Outline-Voice',
      'Outline-Voice3',
      'Outline-VolumeDown',
      'Outline-VolumeOff',
      'Outline-VolumeUp',
      'Outline-Wallet',
      'Outline-Work',
      'Outline-zap',
      'Outline-opy',
      'Outline-baggage-2',
      'Outline-baggage',
      'Bold-restaurant',
      'Outline-Coffee',
      'Outline-conductor',
      'Outline-vana'
    ].sort();

    // Search functionality
    const searchQuery = ref('');
    const filteredIcons = computed(() => {
      if (!searchQuery.value) return icons;

      const normalizedQuery = searchQuery.value.toLowerCase().trim();
      return icons.filter(icon =>
        icon.toLowerCase().includes(normalizedQuery) ||
        // Also search by category (e.g., 'Outline', 'Arrow', etc.)
        icon.toLowerCase().split('-').some(part => part.includes(normalizedQuery))
      );
    });

    // Copy to clipboard functionality
    const copiedIcon = ref<string | null>(null);

    const copyToClipboard = async (iconName: string) => {
      try {
        await navigator.clipboard.writeText(`icon-${iconName}`);
        copiedIcon.value = iconName;
        setTimeout(() => {
          copiedIcon.value = null;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    return {
      icons,
      multiPathIcons,
      copyToClipboard,
      copiedIcon,
      searchQuery,
      filteredIcons
    };
  },
  template: `
    <div class="icons-demo">
      <h1>Icomoon Icons</h1>
      <p>This page showcases all available icons in our icomoon font set. Click on any icon to copy its class name.</p>

      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search icons..."
          class="icon-search-input"
        />
        <span class="icon-count">
          {{ filteredIcons.length }} / {{ icons.length }} icons
        </span>
      </div>

      <div class="icons-grid">
        <div
          v-for="icon in filteredIcons"
          :key="icon"
          class="icon-item"
          :class="{ 'copied': copiedIcon === icon }"
          @click="copyToClipboard(icon)"
        >
          <div class="icon-preview">
            <i v-if="!multiPathIcons[icon]" :class="'icon-' + icon"></i>
            <span v-else :class="'icon-' + icon">
              <template v-for="n in multiPathIcons[icon]" :key="n">
                <span :class="'path' + n"></span>
              </template>
            </span>
          </div>
          <div class="icon-info">
            <div class="icon-name">icon-{{ icon }}</div>
            <code class="icon-class">.icon-{{ icon }}</code>
            <div class="copy-feedback" v-if="copiedIcon === icon">Copied!</div>
          </div>
        </div>
      </div>

      <div class="easy-icon-demo-section">
        <h2>EasyIcon Component Examples</h2>
        <p>Here are some examples of using the EasyIcon component:</p>

        <div class="easy-icon-examples">
          <div class="example-row">
            <div class="example-item">
              <h3>Basic Icons</h3>
              <div class="example-display">
                <EasyIcon name="Bold-Home" :size="24" />
                <EasyIcon name="Bold-Search" :size="24" />
                <EasyIcon name="Bold-Chat" :size="24" />
                <EasyIcon name="Bold-Calendar" :size="24" />
              </div>
              <pre><code>&lt;EasyIcon name="Bold-Home" :size="24" /&gt;</code></pre>
            </div>

            <div class="example-item">
              <h3>Colored Icons</h3>
              <div class="example-display">
                <EasyIcon name="Bold-Home" :size="24" color="#FF0000" />
                <EasyIcon name="Bold-Search" :size="24" color="#00FF00" />
                <EasyIcon name="Bold-Chat" :size="24" color="#0000FF" />
                <EasyIcon name="Bold-Calendar" :size="24" color="#FF00FF" />
              </div>
              <pre><code>&lt;EasyIcon name="Bold-Home" :size="24" color="#FF0000" /&gt;</code></pre>
            </div>
          </div>

          <div class="example-row">
            <div class="example-item">
              <h3>Outline Icons</h3>
              <div class="example-display">
                <EasyIcon name="Outline-Home" :size="24" />
                <EasyIcon name="Outline-Search" :size="24" />
                <EasyIcon name="Outline-Chat" :size="24" />
                <EasyIcon name="Outline-Calendar" :size="24" />
              </div>
              <pre><code>&lt;EasyIcon name="Outline-Home" :size="24" /&gt;</code></pre>
            </div>

            <div class="example-item">
              <h3>Flag Icons (Multi-path)</h3>
              <div class="example-display">
                <EasyIcon name="uzbekistan" :size="32" />
                <EasyIcon name="russia" :size="32" />
                <EasyIcon name="united-kingdom" :size="32" />
              </div>
              <pre><code>&lt;EasyIcon name="uzbekistan" :size="32" /&gt;</code></pre>
            </div>
          </div>

          <div class="example-row">
            <div class="example-item">
              <h3>Travel Icons</h3>
              <div class="example-display">
                <EasyIcon name="travelOutline-traine1" :size="24" />
                <EasyIcon name="travelOutline-hotel" :size="24" />
                <EasyIcon name="travelOutline-plane" :size="24" />
                <EasyIcon name="icon-Outline-tropical" :size="24" />
              </div>
              <pre><code>&lt;EasyIcon name="travelOutline-traine1" :size="24" /&gt;</code></pre>
            </div>

            <div class="example-item">
              <h3>Different Sizes</h3>
              <div class="example-display">
                <EasyIcon name="Bold-Home" :size="16" />
                <EasyIcon name="Bold-Home" :size="24" />
                <EasyIcon name="Bold-Home" :size="32" />
                <EasyIcon name="Bold-Home" :size="48" />
              </div>
              <pre><code>&lt;EasyIcon name="Bold-Home" :size="16" /&gt;
&lt;EasyIcon name="Bold-Home" :size="24" /&gt;
&lt;EasyIcon name="Bold-Home" :size="32" /&gt;
&lt;EasyIcon name="Bold-Home" :size="48" /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div class="usage-section">
        <h2>Usage</h2>
        <p>To use an icon in your component:</p>

        <h3>1. Use the icon class in your template:</h3>
        <pre><code>&lt;i class="icon-Bold-Home"&gt;&lt;/i&gt;</code></pre>

        <h3>2. For multi-path icons (like flags):</h3>
        <pre><code>&lt;span class="icon-uzbekistan"&gt;
  &lt;span class="path1"&gt;&lt;/span&gt;
  &lt;span class="path2"&gt;&lt;/span&gt;
  ...
&lt;/span&gt;</code></pre>

        <h3>3. Customize size and color:</h3>
        <pre><code>&lt;i class="icon-Bold-Home" style="font-size: 24px; color: #007bff;"&gt;&lt;/i&gt;</code></pre>

        <h3>4. Using EasyIcon component:</h3>
        <p>The EasyIcon component provides a convenient way to use icons with automatic handling of multi-path icons.</p>

        <h4>Basic usage:</h4>
        <pre><code>&lt;EasyIcon name="Bold-Home" /&gt;</code></pre>

        <h4>With size and color:</h4>
        <pre><code>&lt;EasyIcon name="Bold-Home" :size="24" color="#007bff" /&gt;</code></pre>

        <h4>Multi-path icons (like flags):</h4>
        <pre><code>&lt;EasyIcon name="uzbekistan" :size="32" /&gt;</code></pre>

        <h4>Import in your component:</h4>
        <pre><code>import { EasyIcon } from 'gts-ui';</code></pre>

        <h4>Or register globally:</h4>
        <pre><code>import { createApp } from 'vue';
import { EasyIcon } from 'gts-ui';
import App from './App.vue';

const app = createApp(App);
app.component('EasyIcon', EasyIcon);
app.mount('#app');</code></pre>
      </div>
    </div>
  `
});

const meta: Meta<typeof IconsDemo> = {
  title: 'Design System/Icons',
  component: IconsDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of all available icomoon icons in the design system.'
      }
    }
  }
};

export default meta;

export const AllIcons: StoryFn<typeof IconsDemo> = () => ({
  components: { IconsDemo },
  template: '<IconsDemo />'
});
