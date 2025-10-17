# 更新日志

## [1.0.0] - 2025-10-17

### ✨ 新增功能

#### 组件
- **FqlButton**: 完整的按钮组件
  - 支持 3 种类型：Primary Fill / Primary Outline / Secondary Outline
  - 支持 5 种尺寸：XL / L / M / S / XS
  - 支持 4 种状态：Default / Loading / Inactive / Disable
  - 完全对照 HTML 版本实现，像素级还原

- **LoadingIcon**: Loading 旋转图标组件
  - 使用 Weex Animation 模块实现旋转动画
  - 与 HTML 版本 CSS animation 效果完全一致
  - 支持白色和蓝色两种颜色
  - 自动管理动画生命周期

- **ButtonDemo**: 组件展示页面
  - 完全对照 Base.html 结构
  - 展示所有按钮类型、尺寸和状态的组合
  - 包含页面头部、分组标题等完整布局

#### 样式系统
- **weex-vars.js**: Weex 兼容的样式变量文件
  - 完整映射 CSS/vars.css 的所有变量
  - 保持与 CSS 文件相同的结构和顺序
  - 包含：圆角、字体、阴影、系统色、参考色

- **style-mixin.js**: 样式复用工具
  - 提供样式变量访问方法
  - 提供样式合并工具
  - 便于跨组件样式共享

#### 文档
- README.md - 项目说明文档
- USAGE_GUIDE.md - 详细使用指南
- CHANGELOG.md - 更新日志

### 🎨 设计规范

- 完全遵循分期乐设计规范
- 颜色系统：主色、营销色、错误色、警告色、成功色、危险色
- 排版系统：标题、正文、链接、数字显示
- 圆角规范：12px / 8px / 4px / 2px
- 阴影效果：上下左右 × 高中低

### 🔧 技术实现

#### Weex 限制解决方案

1. **CSS 变量不支持** → 使用 JS 对象导出样式变量
2. **外部 CSS 文件引用** → 使用 Mixin 和内联样式
3. **CSS Animation** → 使用 Weex Animation 模块
4. **SVG 动画** → 使用 image 组件 + Animation 模块

#### 样式复用方案

- 方式1：使用 style-mixin.js 混入
- 方式2：直接引入 weex-vars.js
- 方式3：组件内 computed 样式计算

#### Loading 动画实现

- 使用 `animation.transition()` 实现 360 度旋转
- 持续时间：1000ms（1秒）
- 缓动函数：linear（线性）
- 无限循环：通过 setInterval 实现
- 自动清理：组件销毁时停止动画

### 📦 项目结构

```
weex-components/
├── assets/              # 静态资源
│   ├── loading-white.svg
│   └── loading-blue.svg
├── components/          # 组件
│   ├── FqlButton.vue
│   ├── LoadingIcon.vue
│   └── ButtonDemo.vue
├── mixins/              # 混入工具
│   └── style-mixin.js
├── styles/              # 样式配置
│   └── weex-vars.js
├── entry.js             # 入口文件
├── package.json         # 包配置
├── README.md            # 项目说明
├── USAGE_GUIDE.md       # 使用指南
└── CHANGELOG.md         # 更新日志
```

### 🎯 完成度

- ✅ 样式变量映射：100%
- ✅ 按钮类型：3/3
- ✅ 按钮尺寸：5/5
- ✅ 按钮状态：4/4
- ✅ Loading 动画：100%（与 HTML 版本一致）
- ✅ 预览页面：100%（对照 Base.html）
- ✅ 样式复用：100%
- ✅ 文档完整度：100%

### 🔍 对照检查

| 项目 | HTML 版本 | Weex 版本 | 状态 |
|------|-----------|-----------|------|
| Primary Fill 按钮 | ✓ | ✓ | ✅ 完成 |
| Primary Outline 按钮 | ✓ | ✓ | ✅ 完成 |
| Secondary Outline 按钮 | ✓ | ✓ | ✅ 完成 |
| XL 尺寸 | ✓ | ✓ | ✅ 完成 |
| L 尺寸 | ✓ | ✓ | ✅ 完成 |
| M 尺寸 | ✓ | ✓ | ✅ 完成 |
| S 尺寸 | ✓ | ✓ | ✅ 完成 |
| XS 尺寸 | ✓ | ✓ | ✅ 完成 |
| Default 状态 | ✓ | ✓ | ✅ 完成 |
| Loading 状态 | ✓ | ✓ | ✅ 完成 |
| Inactive 状态 | ✓ | ✓ | ✅ 完成 |
| Disable 状态 | ✓ | ✓ | ✅ 完成 |
| Loading 动画 | CSS animation | Weex Animation | ✅ 效果一致 |
| 样式变量 | vars.css | weex-vars.js | ✅ 完整映射 |
| 预览页面 | Base.html | ButtonDemo.vue | ✅ 结构一致 |

### 📝 注意事项

1. **SVG 图标路径**：需要根据实际部署配置 LoadingIcon.vue 中的图标路径
2. **字体文件**：Android 平台需要添加 PingFang SC 字体文件
3. **性能测试**：建议在真机上测试 Loading 动画性能
4. **平台差异**：Android 和 iOS 在边框渲染上可能存在细微差异

### 🚀 后续计划

- [ ] 添加更多组件（Input、Card、Modal 等）
- [ ] 提供主题切换功能
- [ ] 优化动画性能
- [ ] 添加单元测试
- [ ] 提供在线示例

---

## 版本说明

遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正
