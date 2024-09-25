import type { Meta, StoryObj } from '@storybook/vue3';
import SelectUser from '../packages/SelectUser/index.vue';

const meta = {
  title: 'Ordinary/SelectUser',
  component: SelectUser,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '选择用户',
  },
  render: (args: any) => ({
    components: { SelectUser },
    setup() {
      const handleSelectConfirm = (selectedData: any) => {
        console.log('选择数据', selectedData);
      };
      return { args, handleSelectConfirm };
    },
    template: `<SelectUser v-bind="args" @selectConfirm="handleSelectConfirm" ></SelectUser>`, // 使用 v-bind 将 args 绑定到组件
  }),
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `
        <template>
          <SelectUser title="选择用户" @selectConfirm="handleSelectConfirm" ></SelectUser>
        </template>

        <script>
        import SelectUser from '../packages/SelectUser/index.vue';

        const handleSelectConfirm = (selectedData) => {
          console.log('选择数据',selectedData);
        }
        </script>
        `
      },
      description: {
        story: '用于选择用户的组件',
      }
    },
  },
};
