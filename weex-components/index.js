/**
 * Weex组件库入口文件
 * 分期乐设计规范 - Weex组件库
 */

import FqlButton from './components/FqlButton.vue';
import LoadingIcon from './components/LoadingIcon.vue';
import vars from './styles/weex-vars.js';
import styleMixin from './mixins/style-mixin.js';

// 组件列表
const components = {
  FqlButton,
  LoadingIcon
};

// 全局安装方法
const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;

  // 注册所有组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });

  // 注册全局样式变量
  Vue.prototype.$fqlVars = vars;
  
  // 注册全局mixin（可选）
  // Vue.mixin(styleMixin);
};

// 自动安装（如果通过script标签引入）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version: '1.0.0',
  // 导出单独的组件
  FqlButton,
  LoadingIcon,
  // 导出样式变量和工具
  vars,
  styleMixin
};

// 导出单独的组件供按需引入
export {
  FqlButton,
  LoadingIcon,
  vars,
  styleMixin
};
