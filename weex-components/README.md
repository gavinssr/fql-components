# 分期乐 Weex 组件库

这是一个基于 Weex 框架开发的移动端组件库，完全对照 HTML 版本实现。

## 📦 项目结构

```
weex-components/
├── assets/              # 静态资源（SVG图标等）
│   ├── loading-white.svg
│   └── loading-blue.svg
├── components/          # 组件目录
│   ├── FqlButton.vue    # 按钮组件
│   ├── LoadingIcon.vue  # Loading图标组件
│   └── ButtonDemo.vue   # 按钮展示页面
├── mixins/              # 混入工具
│   └── style-mixin.js   # 样式混入
├── styles/              # 样式配置
│   └── weex-vars.js     # 样式变量（对应CSS/vars.css）
├── entry.js             # 入口文件
└── README.md            # 说明文档
```

## 🎨 样式变量系统

由于 Weex 不支持直接引用 CSS 文件和 CSS 变量，我们创建了 `weex-vars.js` 文件来替代 `CSS/vars.css`。

### 使用方式

```javascript
// 在组件中引入
import vars from '../styles/weex-vars.js';

// 使用样式变量
const buttonColor = vars.sysColor.primaryDefault;
const borderRadius = vars.radius.large;
```

### 变量结构

- `radius` - 圆角尺寸
- `typography` - 字体排版
- `shadow` - 阴影效果
- `sysColor` - 系统级颜色（语义化）
- `refColor` - 参考级颜色（基础色板）

## 🔧 组件使用

### FqlButton 按钮组件

```vue
<template>
  <fql-button 
    type="primary-fill" 
    size="xl" 
    status="default"
    text="操作文本"
    @click="handleClick"
  />
</template>

<script>
import { FqlButton } from './weex-components/entry.js';

export default {
  components: {
    FqlButton
  },
  methods: {
    handleClick() {
      console.log('按钮被点击');
    }
  }
};
</script>
```

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | String | primary-fill / primary-outline / secondary-outline | primary-fill |
| size | 按钮尺寸 | String | xl / l / m / s / xs | xl |
| status | 按钮状态 | String | default / loading / inactive / disable | default |
| text | 按钮文本 | String | - | 操作文本 |

#### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件 | event |

### LoadingIcon Loading图标组件

```vue
<template>
  <loading-icon type="white" :size="20" />
</template>
```

#### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 图标颜色 | String | white / blue | white |
| size | 图标尺寸 | Number | - | 20 |

## 🎯 特性

### 1. 完整对照 HTML 版本

- ✅ 所有按钮类型（Primary Fill / Primary Outline / Secondary Outline）
- ✅ 所有尺寸（XL / L / M / S / XS）
- ✅ 所有状态（Default / Loading / Inactive / Disable）
- ✅ Loading 动画与 HTML 版本完全一致

### 2. 样式复用方案

由于 Weex 限制无法直接引用 CSS 文件，我们提供了两种样式复用方法：

#### 方法1: 使用 style-mixin.js

```javascript
import styleMixin from './mixins/style-mixin.js';

export default {
  mixins: [styleMixin],
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.getSysColor('primaryDefault'),
        borderRadius: this.getRadius('large') + 'px'
      };
    }
  }
};
```

#### 方法2: 直接引入 weex-vars.js

```javascript
import vars from './styles/weex-vars.js';

export default {
  data() {
    return {
      buttonColor: vars.sysColor.primaryDefault
    };
  }
};
```

### 3. Loading 动画实现

使用 Weex Animation 模块实现旋转动画，效果与 HTML 版本的 CSS animation 完全一致：

- 使用 `animation.transition()` 实现360度旋转
- 1秒完成一次旋转（duration: 1000ms）
- 线性动画（linear timing function）
- 无限循环

## 📋 与 HTML 版本的对应关系

| HTML 文件 | Weex 组件 | 说明 |
|-----------|-----------|------|
| CSS/vars.css | styles/weex-vars.js | 样式变量映射 |
| CSS/style.css | 组件内联样式 | 样式逻辑在组件computed中 |
| Base.html | ButtonDemo.vue | 预览页面 |
| SVG/on primary=true.svg | assets/loading-white.svg | 白色Loading图标 |
| SVG/on primary=false.svg | assets/loading-blue.svg | 蓝色Loading图标 |

## 🚀 运行预览

在 Weex 项目中引入并运行：

```javascript
// main.js
import ButtonDemo from './weex-components/components/ButtonDemo.vue';

// 注册路由或直接使用
```

## 📝 注意事项

1. **SVG 图标路径**: LoadingIcon 组件中的图标路径需要根据实际部署情况调整
2. **字体支持**: 确保目标平台支持 PingFang SC 和 Roboto 字体
3. **动画性能**: Loading 动画使用 Weex Animation 模块，在低端设备上注意性能
4. **样式单位**: Weex 使用 px 作为基础单位，会自动适配不同屏幕密度

## 🔄 更新日志

### v1.0.0 (2025-10-17)

- ✅ 创建 Weex 兼容的样式变量文件
- ✅ 实现 FqlButton 按钮组件
- ✅ 实现 LoadingIcon 组件（与 HTML 版本动画一致）
- ✅ 创建 ButtonDemo 预览页面
- ✅ 提供样式复用工具（style-mixin）
- ✅ 完整对照 Base.html 结构实现
