/**
 * 样式复用Mixin
 * 提供跨组件的样式工具函数和通用样式方法
 * 解决Weex无法直接引用外部CSS文件的限制
 */

import vars from '../styles/weex-vars.js';

export default {
  data() {
    return {
      // 将样式变量注入到组件数据中，方便在模板中使用
      $vars: vars
    };
  },
  methods: {
    /**
     * 获取圆角值
     * @param {string} size - xlarge | large | default | small
     * @returns {number}
     */
    getRadius(size = 'default') {
      return vars.radius[size] || vars.radius.default;
    },

    /**
     * 获取排版样式对象
     * @param {string} type - 排版类型，如 'head16Sub', 'body12Strong' 等
     * @returns {object}
     */
    getTypography(type) {
      return vars.typography[type] || {};
    },

    /**
     * 获取系统颜色
     * @param {string} colorKey - 颜色键名
     * @returns {string}
     */
    getSysColor(colorKey) {
      return vars.sysColor[colorKey] || '#000000';
    },

    /**
     * 获取参考颜色
     * @param {string} colorKey - 颜色键名
     * @returns {string}
     */
    getRefColor(colorKey) {
      return vars.refColor[colorKey] || '#000000';
    },

    /**
     * 合并样式对象
     * 用于组合多个样式对象
     * @param  {...object} styles - 样式对象
     * @returns {object}
     */
    mergeStyles(...styles) {
      return Object.assign({}, ...styles);
    },

    /**
     * 像素转换
     * Weex中尺寸单位是px，但某些平台可能需要转换
     * @param {number} px - 像素值
     * @returns {number}
     */
    px(value) {
      return value;
    }
  }
};
