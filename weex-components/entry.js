/**
 * Weex组件库入口文件
 * 导出所有组件供外部使用
 */

import FqlButton from './components/FqlButton.vue';
import LoadingIcon from './components/LoadingIcon.vue';
import ButtonDemo from './components/ButtonDemo.vue';

// 导出所有组件
export {
  FqlButton,
  LoadingIcon,
  ButtonDemo
};

// 组件列表
const components = {
  FqlButton,
  LoadingIcon,
  ButtonDemo
};

// 提供install方法用于Vue.use()注册
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;

  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

// 自动注册
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
