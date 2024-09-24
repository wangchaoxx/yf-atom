import { App } from 'vue';
import fs from 'fs';
import path from 'path';

const components: { name: string; component: any }[] = [];

// 自动导入组件
const importComponents = (dir: string) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      importComponents(filePath); // 递归处理子目录
    } else if (file.endsWith('.vue')) {
      const componentName = file.replace('.vue', '');
      const component = require(filePath).default; // 动态导入组件
      components.push({ name: componentName, component });
    }
  });
};

importComponents(path.resolve(__dirname, 'packages'));

// 导出插件
export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(`Y${name}`, component);
    });
  }
};
