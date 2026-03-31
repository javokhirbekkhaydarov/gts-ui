import type {Meta, StoryObj} from '@storybook/vue3';
import EasyBreadcrumb from './EasyBreadcrumb.vue';
import "./EasyBreadcrumb.scss";

const meta: Meta = {
  title: 'Components/EasyBreadcrumb',
  component: EasyBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: []
  },
  parameters: {
    docs: {
      description: {
        component: `
         "EasyBreadcrumb" component developed by EasyTechnologies **"LLC"**
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    home: {
      icon: 'icon-Bold-Home',
      route: '/'
    },
    items: [
      {label: 'main', route: '/main'},
      {label: 'form', route: '/form'},
      {label: 'current-page'}
    ],

  }
};

export const WithoutHomeIcon: Story = {
  args: {
    items: [
      {label: 'main', route: '/main'},
      {label: 'form', route: '/form'},
      {label: 'current-page'}
    ]
  },
  render: (args) => ({
    components: {EasyBreadcrumb},
    setup() {
      return {args};
    },
    template: `
      <EasyBreadcrumb :items="args.items"/>`,
  }),
};

