import type { StoryObj } from '@storybook/vue3';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const meta = {
  components: { DataTable, Column },
  title: 'PrimeVue/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'object',
      description: 'Values table',
    },
    columns: {
      control: 'object',
      description: 'Columns table'
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: [
      {
        id: '1',
        fullName: 'Emily Johnson',
        RoleEmployee: 'Руководитель системы',
        status: 'Активный',
      },
      {
        id: '2',
        fullName: 'John Doe',
        RoleEmployee: 'Менеджер',
        status: 'Неактивный',
      },
      {
        id: '3',
        fullName: 'Alice Smith',
        RoleEmployee: 'Разработчик',
        status: 'Активный',
      },
    ],
  },
  render(args) {
    return {
      components: { DataTable, Column },
      setup() {
        const columns = [
          { field: 'id', header: 'ID' },
          { field: 'fullName', header: 'ФИО' },
          { field: 'RoleEmployee', header: 'Роль сотрудника' },
          { field: 'status', header: 'Статус' },
        ];

        return { args, columns };
      },
      template: `
          <DataTable :value="args.value">
            <Column
              v-for="col in columns"
              :key="col.field"
              :field="col.field"
              :header="col.header"
              class="easy-table-row"
            />
          </DataTable>
      `,
    };
  },
};
