<script setup lang="ts">
import { ref, defineProps } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { Button, Modal, ConfigProvider, Table } from 'ant-design-vue';

interface MyComponentProps {
  /** 弹窗标题 */
  title: string;
}

withDefaults(defineProps<MyComponentProps>(), {
  title: '选择用户',
});

interface MyEvents {
  /** 单击确认按钮时触发 */
  (event: 'selectConfirm', data: { name: string }[]): void;
}

const emit = defineEmits<MyEvents>();

const locale = ref(zhCN);

const open = ref<boolean>(false);

function handleSelectUser() {
  open.value = true;
}

/**
 * 确认选择
 */
function handleConfirm() {
  open.value = false;
  emit('selectConfirm', [{ name: '张三' }])
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
]

const data = [
  {
    key: '1',
    name: '张三',
  }
]

</script>
<template>
  <ConfigProvider :locale="locale">
    <div class="select-user-container">
      <Button type="primary" @click="handleSelectUser">选择用户</Button>
      <Modal v-model:open="open" :title="title" @ok="handleConfirm">
        <Table :columns="columns" :data-source="data" />
      </Modal>
    </div>
  </ConfigProvider>
</template>
<style lang="less"></style>
