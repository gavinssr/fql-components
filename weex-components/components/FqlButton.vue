<template>
  <div 
    :class="['fql-button', `fql-button--${type}`, `fql-button--${size}`, `fql-button--${status}`]"
    :style="buttonStyle"
    @click="handleClick"
  >
    <!-- Loading图标 -->
    <loading-icon
      v-if="status === 'loading' && showLoadingIcon"
      :type="loadingIconType"
      :size="loadingIconSize"
      :style="loadingStyle"
    />
    
    <!-- 按钮文字 -->
    <text :style="textStyle" class="fql-button__text">
      <slot>{{ text }}</slot>
    </text>
  </div>
</template>

<script>
import styleMixin from '../mixins/style-mixin.js';
import LoadingIcon from './LoadingIcon.vue';

export default {
  name: 'FqlButton',
  components: {
    LoadingIcon
  },
  mixins: [styleMixin],
  props: {
    // 按钮文本
    text: {
      type: String,
      default: '操作文本'
    },
    // 按钮类型: primary-fill | primary-outline | secondary-outline
    type: {
      type: String,
      default: 'primary-fill',
      validator: (value) => {
        return ['primary-fill', 'primary-outline', 'secondary-outline'].includes(value);
      }
    },
    // 按钮尺寸: xl | l | m | s | xs
    size: {
      type: String,
      default: 'xl',
      validator: (value) => {
        return ['xl', 'l', 'm', 's', 'xs'].includes(value);
      }
    },
    // 按钮状态: default | loading | inactive | disable
    status: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'loading', 'inactive', 'disable'].includes(value);
      }
    }
  },
  computed: {
    // 按钮容器样式
    buttonStyle() {
      const styles = {
        borderRadius: this.getBorderRadius() + 'px',
        ...this.getSizeStyles(),
        ...this.getBackgroundStyles(),
        ...this.getBorderStyles(),
        ...this.getPaddingStyles(),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      };
      return styles;
    },

    // 文字样式
    textStyle() {
      const typography = this.getTextTypography();
      return {
        color: this.getTextColor(),
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize + 'px',
        lineHeight: typography.lineHeight + 'px',
        fontWeight: typography.fontWeight,
        textAlign: 'center'
      };
    },

    // Loading图标样式
    loadingStyle() {
      const size = (this.size === 'xl' || this.size === 'l') ? 20 : 16;
      return {
        width: size + 'px',
        height: size + 'px',
        marginRight: '8px'
      };
    },

    // Loading图标类型
    loadingIconType() {
      // Primary Fill使用白色loading图标
      return this.type === 'primary-fill' ? 'white' : 'blue';
    },

    // Loading图标尺寸
    loadingIconSize() {
      return (this.size === 'xl' || this.size === 'l') ? 20 : 16;
    },

    // 是否显示loading图标（仅xl和l尺寸显示）
    showLoadingIcon() {
      return this.size === 'xl' || this.size === 'l';
    }
  },
  methods: {
    // 获取圆角
    getBorderRadius() {
      const radiusMap = {
        xl: this.$vars.radius.large,
        l: this.$vars.radius.large,
        m: this.$vars.radius.default,
        s: this.$vars.radius.default,
        xs: this.$vars.radius.small
      };
      return radiusMap[this.size];
    },

    // 获取尺寸样式
    getSizeStyles() {
      const sizeMap = {
        xl: { width: 355, height: 48 },
        l: { width: 327, height: 44 },
        m: { minWidth: 72, height: 28 },
        s: { minWidth: 68, height: 24 },
        xs: { minWidth: 52, height: 16 }
      };
      return sizeMap[this.size];
    },

    // 获取背景样式
    getBackgroundStyles() {
      const { type, status } = this;
      const { sysColor } = this.$vars;

      // Primary Fill
      if (type === 'primary-fill') {
        if (status === 'default' || status === 'loading') {
          return { backgroundColor: sysColor.primaryDefault };
        } else if (status === 'inactive') {
          return { backgroundColor: sysColor.primaryInactive };
        } else if (status === 'disable') {
          return { backgroundColor: sysColor.primaryDisable };
        }
      }

      // Primary Outline
      if (type === 'primary-outline') {
        return { backgroundColor: 'transparent' };
      }

      // Secondary Outline
      if (type === 'secondary-outline') {
        if (status === 'disable') {
          return { backgroundColor: sysColor.primaryDisable };
        }
        return { backgroundColor: sysColor.white };
      }

      return {};
    },

    // 获取边框样式
    getBorderStyles() {
      const { type, status } = this;
      const { sysColor } = this.$vars;

      if (type === 'primary-outline') {
        let borderColor = sysColor.primaryDefault;
        if (status === 'inactive') {
          borderColor = sysColor.primaryInactive;
        } else if (status === 'disable') {
          borderColor = sysColor.textBlackH4;
        }
        return {
          borderWidth: '0.5px',
          borderStyle: 'solid',
          borderColor: borderColor
        };
      }

      if (type === 'secondary-outline') {
        let borderWidth = '0.5px';
        if (status === 'disable' && (this.size === 'xl' || this.size === 'l')) {
          borderWidth = '1px';
        }
        return {
          borderWidth: borderWidth,
          borderStyle: 'solid',
          borderColor: sysColor.wireDividerDark
        };
      }

      return {};
    },

    // 获取内边距样式
    getPaddingStyles() {
      const { type, size, status } = this;

      // XL尺寸
      if (size === 'xl') {
        if (type === 'primary-fill') {
          return { paddingLeft: '10px', paddingRight: '10px', paddingTop: '16px', paddingBottom: '16px' };
        }
        return { paddingLeft: '0px', paddingRight: '0px', paddingTop: '16px', paddingBottom: '16px' };
      }

      // L尺寸
      if (size === 'l') {
        if (type === 'primary-fill') {
          if (status === 'loading') {
            return { paddingLeft: '0px', paddingRight: '0px', paddingTop: '12px', paddingBottom: '12px' };
          }
          return { paddingLeft: '0px', paddingRight: '0px', paddingTop: '16px', paddingBottom: '16px' };
        }
        if (type === 'primary-outline' || type === 'secondary-outline') {
          return { paddingLeft: '117px', paddingRight: '117px', paddingTop: '16px', paddingBottom: '16px' };
        }
      }

      // M尺寸
      if (size === 'm') {
        return { paddingLeft: '12px', paddingRight: '12px', paddingTop: '0px', paddingBottom: '0px' };
      }

      // S尺寸
      if (size === 's') {
        if (status === 'disable' && type === 'primary-outline') {
          return { paddingLeft: '12px', paddingRight: '12px', paddingTop: '0px', paddingBottom: '0px' };
        }
        return { paddingLeft: '10px', paddingRight: '10px', paddingTop: '0px', paddingBottom: '0px' };
      }

      // XS尺寸
      if (size === 'xs') {
        if (status === 'disable' && type === 'primary-outline') {
          return { paddingLeft: '12px', paddingRight: '12px', paddingTop: '0px', paddingBottom: '0px' };
        }
        return { paddingLeft: '6px', paddingRight: '6px', paddingTop: '0px', paddingBottom: '0px' };
      }

      return {};
    },

    // 获取文字颜色
    getTextColor() {
      const { type, status } = this;
      const { sysColor } = this.$vars;

      // Disable状态统一文字颜色
      if (status === 'disable') {
        return sysColor.textBlackH4;
      }

      // Primary Fill
      if (type === 'primary-fill') {
        return sysColor.textWhiteH1;
      }

      // Primary Outline
      if (type === 'primary-outline') {
        if (status === 'default' || status === 'loading') {
          return sysColor.primaryDefault;
        } else if (status === 'inactive') {
          return sysColor.primaryInactive;
        }
      }

      // Secondary Outline
      if (type === 'secondary-outline') {
        if (status === 'default' || status === 'loading') {
          return sysColor.textBlackH1;
        } else if (status === 'inactive') {
          return sysColor.textBlackH3;
        }
      }

      return sysColor.textBlackH1;
    },

    // 获取文字排版
    getTextTypography() {
      const { size } = this;
      const { typography } = this.$vars;

      if (size === 'xl' || size === 'l') {
        return typography.head16Sub;
      } else if (size === 'm' || size === 's') {
        return typography.body12Strong;
      } else if (size === 'xs') {
        return typography.body10Strong;
      }

      return typography.head16Sub;
    },

    // 点击事件处理
    handleClick(e) {
      // Disable和Loading状态不触发点击
      if (this.status === 'disable' || this.status === 'loading') {
        return;
      }
      this.$emit('click', e);
    }
  }
};
</script>

<style scoped>
.fql-button {
  box-sizing: border-box;
}

.fql-button__loading {
  /* Loading图标旋转动画 */
  /* 注意: Weex的动画需要通过animation模块实现，这里仅做占位 */
}

.fql-button__text {
  white-space: nowrap;
}
</style>
