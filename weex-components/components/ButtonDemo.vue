<template>
  <scroller class="base-container">
    <!-- 页面头部 -->
    <div class="page-header">
      <div class="page-header-content">
        <div class="page-header-title">
          <text class="page-header-title-cn">按钮</text>
          <text class="page-header-title-en">Button</text>
        </div>
        <text class="page-header-desc">
          按钮用于执行用户在交互流程中触发指令、提交更改或完成的即时操作。
        </text>
      </div>
      <div class="page-header-brand">
        <text class="page-header-brand-cn">分期乐设计规范</text>
        <text class="page-header-brand-en">FENQILE DESIGN</text>
      </div>
    </div>

    <!-- Default 状态 -->
    <text class="section-title">Default 状态</text>
    <div class="figma-layout">
      <!-- Primary Fill 列 -->
      <div class="column">
        <text class="column-title">Primary Fill</text>
        <div class="size-row">
          <fql-button type="primary-fill" status="default" size="xl" text="操作文本" />
          <fql-button type="primary-fill" status="default" size="l" text="操作文本" />
          <fql-button type="primary-fill" status="default" size="m" text="操作文本" />
          <fql-button type="primary-fill" status="default" size="s" text="操作文本" />
          <fql-button type="primary-fill" status="default" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Primary Outline 列 -->
      <div class="column">
        <text class="column-title">Primary Outline</text>
        <div class="size-row">
          <fql-button type="primary-outline" status="default" size="xl" text="操作文本" />
          <fql-button type="primary-outline" status="default" size="l" text="操作文本" />
          <fql-button type="primary-outline" status="default" size="m" text="操作文本" />
          <fql-button type="primary-outline" status="default" size="s" text="操作文本" />
          <fql-button type="primary-outline" status="default" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Secondary Outline 列 -->
      <div class="column">
        <text class="column-title">Secondary Outline</text>
        <div class="size-row">
          <fql-button type="secondary-outline" status="default" size="xl" text="操作文本" />
          <fql-button type="secondary-outline" status="default" size="l" text="操作文本" />
          <fql-button type="secondary-outline" status="default" size="m" text="操作文本" />
          <fql-button type="secondary-outline" status="default" size="s" text="操作文本" />
          <fql-button type="secondary-outline" status="default" size="xs" text="操作文本" />
        </div>
      </div>
    </div>

    <!-- Loading 状态 -->
    <text class="section-title">Loading 状态</text>
    <div class="figma-layout">
      <!-- Primary Fill 列 -->
      <div class="column">
        <text class="column-title">Primary Fill</text>
        <div class="size-row">
          <fql-button type="primary-fill" status="loading" size="xl" text="操作文本" />
          <fql-button type="primary-fill" status="loading" size="l" text="操作文本" />
          <fql-button type="primary-fill" status="loading" size="m" text="操作文本" />
          <fql-button type="primary-fill" status="loading" size="s" text="操作文本" />
          <fql-button type="primary-fill" status="loading" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Primary Outline 列 -->
      <div class="column">
        <text class="column-title">Primary Outline</text>
        <div class="size-row">
          <fql-button type="primary-outline" status="loading" size="xl" text="操作文本" />
          <fql-button type="primary-outline" status="loading" size="l" text="操作文本" />
          <fql-button type="primary-outline" status="loading" size="m" text="操作文本" />
          <fql-button type="primary-outline" status="loading" size="s" text="操作文本" />
          <fql-button type="primary-outline" status="loading" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Secondary Outline 列 -->
      <div class="column">
        <text class="column-title">Secondary Outline</text>
        <div class="size-row">
          <fql-button type="secondary-outline" status="loading" size="xl" text="操作文本" />
          <fql-button type="secondary-outline" status="loading" size="l" text="操作文本" />
          <fql-button type="secondary-outline" status="loading" size="m" text="操作文本" />
          <fql-button type="secondary-outline" status="loading" size="s" text="操作文本" />
          <fql-button type="secondary-outline" status="loading" size="xs" text="操作文本" />
        </div>
      </div>
    </div>

    <!-- Inactive 状态 -->
    <text class="section-title">Inactive 状态</text>
    <div class="figma-layout">
      <!-- Primary Fill 列 -->
      <div class="column">
        <text class="column-title">Primary Fill</text>
        <div class="size-row">
          <fql-button type="primary-fill" status="inactive" size="xl" text="操作文本" />
          <fql-button type="primary-fill" status="inactive" size="l" text="操作文本" />
          <fql-button type="primary-fill" status="inactive" size="m" text="操作文本" />
          <fql-button type="primary-fill" status="inactive" size="s" text="操作文本" />
          <fql-button type="primary-fill" status="inactive" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Primary Outline 列 -->
      <div class="column">
        <text class="column-title">Primary Outline</text>
        <div class="size-row">
          <fql-button type="primary-outline" status="inactive" size="xl" text="操作文本" />
          <fql-button type="primary-outline" status="inactive" size="l" text="操作文本" />
          <fql-button type="primary-outline" status="inactive" size="m" text="操作文本" />
          <fql-button type="primary-outline" status="inactive" size="s" text="操作文本" />
          <fql-button type="primary-outline" status="inactive" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Secondary Outline 列 -->
      <div class="column">
        <text class="column-title">Secondary Outline</text>
        <div class="size-row">
          <fql-button type="secondary-outline" status="inactive" size="xl" text="操作文本" />
          <fql-button type="secondary-outline" status="inactive" size="l" text="操作文本" />
          <fql-button type="secondary-outline" status="inactive" size="m" text="操作文本" />
          <fql-button type="secondary-outline" status="inactive" size="s" text="操作文本" />
          <fql-button type="secondary-outline" status="inactive" size="xs" text="操作文本" />
        </div>
      </div>
    </div>

    <!-- Disable 状态 -->
    <text class="section-title">Disable 状态</text>
    <div class="figma-layout">
      <!-- Primary Fill 列 -->
      <div class="column">
        <text class="column-title">Primary Fill</text>
        <div class="size-row">
          <fql-button type="primary-fill" status="disable" size="xl" text="操作文本" />
          <fql-button type="primary-fill" status="disable" size="l" text="操作文本" />
          <fql-button type="primary-fill" status="disable" size="m" text="操作文本" />
          <fql-button type="primary-fill" status="disable" size="s" text="操作文本" />
          <fql-button type="primary-fill" status="disable" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Primary Outline 列 -->
      <div class="column">
        <text class="column-title">Primary Outline</text>
        <div class="size-row">
          <fql-button type="primary-outline" status="disable" size="xl" text="操作文本" />
          <fql-button type="primary-outline" status="disable" size="l" text="操作文本" />
          <fql-button type="primary-outline" status="disable" size="m" text="操作文本" />
          <fql-button type="primary-outline" status="disable" size="s" text="操作文本" />
          <fql-button type="primary-outline" status="disable" size="xs" text="操作文本" />
        </div>
      </div>

      <!-- Secondary Outline 列 -->
      <div class="column">
        <text class="column-title">Secondary Outline</text>
        <div class="size-row">
          <fql-button type="secondary-outline" status="disable" size="xl" text="操作文本" />
          <fql-button type="secondary-outline" status="disable" size="l" text="操作文本" />
          <fql-button type="secondary-outline" status="disable" size="m" text="操作文本" />
          <fql-button type="secondary-outline" status="disable" size="s" text="操作文本" />
          <fql-button type="secondary-outline" status="disable" size="xs" text="操作文本" />
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
import FqlButton from './FqlButton.vue';
import vars from '../styles/weex-vars.js';

export default {
  name: 'ButtonDemo',
  components: {
    FqlButton
  },
  data() {
    return {
      vars: vars
    };
  }
};
</script>

<style scoped>
.base-container {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #f5f7fa;
}

/* 页面头部样式 */
.page-header {
  background-color: #000000;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.page-header-content {
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}

.page-header-title {
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
}

.page-header-title-cn {
  font-family: PingFangSc-Medium;
  font-size: 48px;
  font-weight: 600;
  color: #ffffff;
  margin-right: 16px;
}

.page-header-title-en {
  font-family: Roboto;
  font-size: 48px;
  font-weight: 600;
  color: #ffffff;
}

.page-header-desc {
  font-family: PingFangSc-Regular;
  font-size: 20px;
  font-weight: 400;
  color: #dcdcde;
  lines: 2;
}

.page-header-brand {
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.page-header-brand-cn {
  font-family: PingFangSc-Medium;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 12px;
}

.page-header-brand-en {
  font-family: Roboto;
  font-size: 30px;
  font-weight: 200;
  color: #ffffff;
}

/* 分组标题样式 */
.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #ffffff;
  border-radius: 8px;
}

/* Figma三列布局 */
.figma-layout {
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
}

/* 单列区域 */
.column {
  flex-direction: column;
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
}

/* 单列标题 */
.column-title {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #f0f0f0;
  border-radius: 6px;
  margin-bottom: 12px;
}

/* 按钮行 */
.size-row {
  flex-direction: column;
  align-items: center;
}

.size-row > * {
  margin-bottom: 8px;
}
</style>
