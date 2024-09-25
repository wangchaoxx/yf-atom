import './design/index.less';

import Button from './packages/Button/index.vue';
import Table from './packages/Table/index.vue';
export { Button, Table };

// 导出插件安装函数
export default {
  install(Vue: { component: (arg0: string, arg1: any) => void; }) {
    Vue.component('YButton', Button as any);
    Vue.component('YTable', Table as any);
  }
};
