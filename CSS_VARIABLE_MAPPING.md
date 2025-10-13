# CSS 变量映射表
> 分期乐组件库设计系统 - Figma 到 CSS 变量映射规则  
> 用于从 Figma 设计稿生成代码时的统一变量映射

---

## 📋 目录
- [快速参考](#-快速参考)
- [颜色映射表](#-颜色映射表)
- [字体映射表](#-字体映射表)
- [阴影与效果](#-阴影与效果)
- [尺寸规范](#-尺寸规范)
- [BEM 命名规范](#-bem-命名规范)
- [代码生成规则](#-代码生成规则)

---

## 🎯 快速参考

### 命名规范总览
```
系统级颜色：--sys-{功能}-{状态}
参考级颜色：--ref-{色系}-{色号}
文本颜色：  --sys-text-{颜色}-{层级}
字体样式：  --typography-{类型}-{尺寸}-{属性}
阴影效果：  --shadow-{方向}-{强度}-box-shadow
CSS 类名：  遵循 BEM 规范（.block__element--modifier）
```

### ⚠️ Figma 变量名优化规则

**核心原则：消除树状结构导致的命名冗余**

在 Figma 中，变量采用树状结构组织（如 `ref/brand/blue/blue1`），转换为 CSS 变量时会产生冗余：

```
❌ 错误（Figma 直接导出）：
ref/brand/blue/blue1  →  --ref-brand-blue-blue1  （"blue"重复了！）

✅ 正确（优化后）：
ref/brand/blue/blue1  →  --ref-brand-blue1  （去掉冗余的"blue"）
```

**优化规则：**
1. **识别冗余层级**：树状路径的倒数第二级如果与倒数第一级重复，则需要去除
2. **保留有意义的层级**：只保留 `ref-{一级分类}-{具体标识}`
3. **特殊标识保留**：如 `base`、`a10`、`a30` 等特殊后缀必须保留

**示例对比：**

| Figma 树状路径 | Figma 导出名（冗余） | 优化后的 CSS 变量 |
|--------------|-------------------|-----------------|
| ref/brand/blue/blue8-base | --ref-brand-blue-blue8-base | --ref-brand-blue8-base ✅ |
| ref/brand/pink/pink1 | --ref-brand-pink-pink1 | --ref-brand-pink1 ✅ |
| ref/functional/red/red5 | --ref-functional-red-red5 | --ref-functional-red5 ✅ |
| ref/neutral/gray/gray2-a60 | --ref-neutral-gray-gray2-a60 | --ref-neutral-gray2-a60 ✅ |

**系统级变量无此问题：**
系统级变量（`--sys-*`）通常不会有冗余，因为其命名已经是语义化的：
```
sys/primary/default  →  --sys-primary-default  ✅（无冗余）
sys/text/white/h1    →  --sys-text-white-h1    ✅（无冗余）
```

---

## 🎨 颜色映射表

### 一、系统级颜色变量（优先使用）

#### 1.1 主色系 Primary（品牌蓝色）
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Primary/Default | `--sys-primary-default` | #4d83ff | 主色默认态 |
| Primary/Hover | `--sys-primary-hover` | #6694ff | 主色悬停态 |
| Primary/Active | `--sys-primary-active` | #3371ff | 主色激活/按下态 |
| Primary/Inactive | `--sys-primary-inactive` | #b2caff | 主色非激活态 |
| Primary/Disable | `--sys-primary-disable` | #f3f4f5 | 主色禁用态 |

#### 1.2 营销色系 Marketing（品牌粉色）
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Marketing/Default | `--sys-marketing-default` | #ff4d82 | 营销色默认态 |
| Marketing/Hover | `--sys-marketing-hover` | #ff6694 | 营销色悬停态 |
| Marketing/Active | `--sys-marketing-active` | #ff3371 | 营销色激活态 |
| Marketing/Inactive | `--sys-marketing-inactive` | #ffb2c9 | 营销色非激活态 |
| Marketing/Disable | `--sys-marketing-disable` | #f3f4f5 | 营销色禁用态 |

#### 1.3 错误色系 Error（功能红色）
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Error/Default | `--sys-error-default` | #e53948 | 错误提示默认 |
| Error/Hover | `--sys-error-hover` | #e55c68 | 错误提示悬停 |
| Error/Active | `--sys-error-active` | #d92c3a | 错误提示激活 |
| Error/Inactive | `--sys-error-inactive` | #ffa6ad | 错误提示非激活 |
| Error/Disable | `--sys-error-disable` | #f3f4f5 | 错误提示禁用 |

#### 1.4 警告色系 Caution（功能橙色）
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Caution/Default | `--sys-caution-default` | #ff9d33 | 警告提示默认 |
| Caution/Hover | `--sys-caution-hover` | #ffa94d | 警告提示悬停 |
| Caution/Active | `--sys-caution-active` | #ff8a0e | 警告提示激活 |
| Caution/Inactive | `--sys-caution-inactive` | #ffc78c | 警告提示非激活 |
| Caution/Disable | `--sys-caution-disable` | #f3f4f5 | 警告提示禁用 |

#### 1.5 成功色系 Success（功能绿色）
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Success/Default | `--sys-success-default` | #26bf71 | 成功提示默认 |
| Success/Hover | `--sys-success-hover` | #3fc27f | 成功提示悬停 |
| Success/Active | `--sys-success-active` | #0cba60 | 成功提示激活 |
| Success/Inactive | `--sys-success-inactive` | #8dd9b2 | 成功提示非激活 |
| Success/Disable | `--sys-success-disable` | #f3f4f5 | 成功提示禁用 |

#### 1.6 危险色系 Dangerous（同错误色）
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Dangerous/Default | `--sys-dangerous-default` | #e53948 | 危险操作默认 |
| Dangerous/Hover | `--sys-dangerous-hover` | #e55c68 | 危险操作悬停 |
| Dangerous/Active | `--sys-dangerous-active` | #d92c3a | 危险操作激活 |
| Dangerous/Inactive | `--sys-dangerous-inactive` | #ffa6ad | 危险操作非激活 |
| Dangerous/Disable | `--sys-dangerous-disable` | #f3f4f5 | 危险操作禁用 |

#### 1.7 文本颜色 Text
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Text/White/H1 | `--sys-text-white-h1` | #ffffff | 白色主文本（100%） |
| Text/White/H2 | `--sys-text-white-h2` | rgba(255,255,255,0.6) | 白色次要文本（60%） |
| Text/White/H3 | `--sys-text-white-h3` | rgba(255,255,255,0.4) | 白色三级文本（40%） |
| Text/Black/H1 | `--sys-text-black-h1` | #1e2533 | 黑色主文本 |
| Text/Black/H2 | `--sys-text-black-h2` | #787c85 | 黑色次要文本（60%） |
| Text/Black/H3 | `--sys-text-black-h3` | #a4a8ac | 黑色三级文本（40%） |
| Text/Black/H4 | `--sys-text-black-h4` | #d2d3d6 | 黑色四级文本（20%） |

#### 1.8 页面与布局
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Page/Background | `--sys-page-background-fill` | #f5f7fa | 页面背景色 |
| Page/Mask | `--sys-page-background-mask` | rgba(0,0,0,0.7) | 遮罩层背景 |
| Wire/Divider/Dark | `--sys-wire-divider-dark` | #ededee | 深色分割线 |
| Wire/Divider/Light | `--sys-wire-divider-light` | #ffffff | 浅色分割线 |

#### 1.9 图标颜色
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| IconFont/White | `--sys-iconfont-white` | #ffffff | 白色图标 |
| IconFont/Black | `--sys-iconfont-black` | #1e2533 | 黑色图标 |

#### 1.10 第三方颜色
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| External/Alipay | `--sys-external-alipay` | #049fff | 支付宝品牌色 |
| External/WeChat | `--sys-external-wechat` | #51d768 | 微信品牌色 |

#### 1.11 数据可视化
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Data/Up | `--sys-data-up` | #e53948 | 数据上涨（红色） |
| Data/Down | `--sys-data-down` | #26bf71 | 数据下降（绿色） |

#### 1.12 基础色
| Figma 图层/样式 | CSS 变量 | 实际色值 | 用途说明 |
|----------------|---------|---------|---------|
| Black | `--sys-black` | #050c1c | 纯黑色 |
| White | `--sys-white` | #ffffff | 纯白色 |

---

### 二、参考级颜色变量（供系统级变量引用）

#### 2.1 品牌蓝色 Brand Blue
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 色阶说明 |
|---------------|-----------------|------|---------|
| ref/brand/blue/blue1 | `--ref-brand-blue1` | #f2f6ff | 最浅 |
| ref/brand/blue/blue2 | `--ref-brand-blue2` | #e5edff | ↓ |
| ref/brand/blue/blue3 | `--ref-brand-blue3` | #ccdbff | ↓ |
| ref/brand/blue/blue4 | `--ref-brand-blue4` | #b2caff | ↓ |
| ref/brand/blue/blue5 | `--ref-brand-blue5` | #99b8ff | ↓ |
| ref/brand/blue/blue6 | `--ref-brand-blue6` | #80a6ff | ↓ |
| ref/brand/blue/blue7 | `--ref-brand-blue7` | #6694ff | ↓ |
| ref/brand/blue/blue8-base | `--ref-brand-blue8-base` | #4d83ff | 基准色 ⭐ |
| ref/brand/blue/blue9 | `--ref-brand-blue9` | #3371ff | 最深 |

**透明度变体（用于背景）：**
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 透明度 |
|---------------|-----------------|------|--------|
| ref/brand/blue/blue1-a10 | `--ref-brand-blue1-a10` | #fefeff | 10% |
| ref/brand/blue/blue1-a30 | `--ref-brand-blue1-a30` | #fbfcff | 30% |
| ref/brand/blue/blue1-a50 | `--ref-brand-blue1-a50` | #f8faff | 50% |
| ref/brand/blue/blue1-a70 | `--ref-brand-blue1-a70` | #f5f8ff | 70% |

#### 2.2 品牌粉色 Brand Pink
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 色阶说明 |
|---------------|-----------------|------|---------|
| ref/brand/pink/pink1 | `--ref-brand-pink1` | #fff2f6 | 最浅 |
| ref/brand/pink/pink2 | `--ref-brand-pink2` | #ffe5ed | ↓ |
| ref/brand/pink/pink3 | `--ref-brand-pink3` | #ffccdb | ↓ |
| ref/brand/pink/pink4 | `--ref-brand-pink4` | #ffb2c9 | ↓ |
| ref/brand/pink/pink5 | `--ref-brand-pink5` | #ff99b7 | ↓ |
| ref/brand/pink/pink6 | `--ref-brand-pink6` | #ff80a6 | ↓ |
| ref/brand/pink/pink7 | `--ref-brand-pink7` | #ff6694 | ↓ |
| ref/brand/pink/pink8-base | `--ref-brand-pink8-base` | #ff4d82 | 基准色 ⭐ |
| ref/brand/pink/pink9 | `--ref-brand-pink9` | #ff3371 | 最深 |

**透明度变体：**
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 透明度 |
|---------------|-----------------|------|--------|
| ref/brand/pink/pink1-a10 | `--ref-brand-pink1-a10` | #fffefe | 10% |
| ref/brand/pink/pink1-a30 | `--ref-brand-pink1-a30` | #fffbfc | 30% |
| ref/brand/pink/pink1-a50 | `--ref-brand-pink1-a50` | #fff8fa | 50% |
| ref/brand/pink/pink1-a70 | `--ref-brand-pink1-a70` | #fff6f9 | 70% |

#### 2.3 功能红色 Functional Red
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 色阶说明 |
|---------------|-----------------|------|---------|
| ref/functional/red/red1 | `--ref-functional-red1` | #ffd9dc | 最浅 |
| ref/functional/red/red2 | `--ref-functional-red2` | #ffccd0 | ↓ |
| ref/functional/red/red3 | `--ref-functional-red3` | #ffb2b9 | ↓ |
| ref/functional/red/red4 | `--ref-functional-red4` | #ffa6ad | ↓ |
| ref/functional/red/red5 | `--ref-functional-red5` | #ff99a2 | ↓ |
| ref/functional/red/red6 | `--ref-functional-red6` | #f27984 | ↓ |
| ref/functional/red/red7 | `--ref-functional-red7` | #e55c68 | ↓ |
| ref/functional/red/red8-base | `--ref-functional-red8-base` | #e53948 | 基准色 ⭐ |
| ref/functional/red/red9 | `--ref-functional-red9` | #d92c3a | 最深 |

**透明度变体：**
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 透明度 |
|---------------|-----------------|------|--------|
| ref/functional/red/red1-a10 | `--ref-functional-red1-a10` | #fffbfb | 10% |
| ref/functional/red/red1-a30 | `--ref-functional-red1-a30` | #fff4f5 | 30% |
| ref/functional/red/red1-a50 | `--ref-functional-red1-a50` | #ffeced | 50% |
| ref/functional/red/red1-a70 | `--ref-functional-red1-a70` | #fee4e6 | 70% |

#### 2.4 功能橙色 Functional Orange
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 色阶说明 |
|---------------|-----------------|------|---------|
| ref/functional/orange/orange1 | `--ref-functional-orange1` | #ffecd9 | 最浅 |
| ref/functional/orange/orange2 | `--ref-functional-orange2` | #ffe1bf | ↓ |
| ref/functional/orange/orange3 | `--ref-functional-orange3` | #fed4a5 | ↓ |
| ref/functional/orange/orange4 | `--ref-functional-orange4` | #ffc78c | ↓ |
| ref/functional/orange/orange5 | `--ref-functional-orange5` | #ffc180 | ↓ |
| ref/functional/orange/orange6 | `--ref-functional-orange6` | #ffb566 | ↓ |
| ref/functional/orange/orange7 | `--ref-functional-orange7` | #ffa94d | ↓ |
| ref/functional/orange/orange8-base | `--ref-functional-orange8-base` | #ff9d33 | 基准色 ⭐ |
| ref/functional/orange/orange9 | `--ref-functional-orange9` | #ff8a0e | 最深 |

**透明度变体：**
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 透明度 |
|---------------|-----------------|------|--------|
| ref/functional/orange/orange1-a10 | `--ref-functional-orange1-a10` | #fffdfb | 10% |
| ref/functional/orange/orange1-a30 | `--ref-functional-orange1-a30` | #fff9f4 | 30% |
| ref/functional/orange/orange1-a50 | `--ref-functional-orange1-a50` | #fff5ec | 50% |
| ref/functional/orange/orange1-a70 | `--ref-functional-orange1-a70` | #fff1e3 | 70% |

#### 2.5 功能绿色 Functional Green
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 色阶说明 |
|---------------|-----------------|------|---------|
| ref/functional/green/green1 | `--ref-functional-green1` | #cef2e0 | 最浅 |
| ref/functional/green/green2 | `--ref-functional-green2` | #c2f2d9 | ↓ |
| ref/functional/green/green3 | `--ref-functional-green3` | #ace5c8 | ↓ |
| ref/functional/green/green4 | `--ref-functional-green4` | #8dd9b2 | ↓ |
| ref/functional/green/green5 | `--ref-functional-green5` | #82d9ac | ↓ |
| ref/functional/green/green6 | `--ref-functional-green6` | #52cc8d | ↓ |
| ref/functional/green/green7 | `--ref-functional-green7` | #3fc27f | ↓ |
| ref/functional/green/green8 | `--ref-functional-green8` | #26bf71 | 基准色 ⭐ |
| ref/functional/green/green9 | `--ref-functional-green9` | #0cba60 | 最深 |

**透明度变体：**
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 透明度 |
|---------------|-----------------|------|--------|
| ref/functional/green/green1-a10 | `--ref-functional-green1-a10` | #fafefc | 10% |
| ref/functional/green/green1-a30 | `--ref-functional-green1-a30` | #f0fbf6 | 30% |
| ref/functional/green/green1-a50 | `--ref-functional-green1-a50` | #e6f8ee | 50% |
| ref/functional/green/green1-a70 | `--ref-functional-green1-a70` | #ddf6e9 | 70% |

#### 2.6 中性灰色 Neutral Gray
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 色阶说明 |
|---------------|-----------------|------|---------|
| ref/neutral/gray/gray1 | `--ref-neutral-gray1` | #050c1c | 最深 |
| ref/neutral/gray/gray2 | `--ref-neutral-gray2` | #1e2533 | ↓ |
| ref/neutral/gray/gray3 | `--ref-neutral-gray3` | #81858d | ↓ |
| ref/neutral/gray/gray4 | `--ref-neutral-gray4` | #9c9ea4 | ↓ |
| ref/neutral/gray/gray5 | `--ref-neutral-gray5` | #b4b6bc | ↓ |
| ref/neutral/gray/gray6 | `--ref-neutral-gray6` | #f3f4f5 | 最浅 |

**透明度变体：**
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 不透明度 |
|---------------|-----------------|------|---------|
| ref/neutral/gray/gray2-a60 | `--ref-neutral-gray2-a60` | #787c85 | 60% |
| ref/neutral/gray/gray2-a40 | `--ref-neutral-gray2-a40` | #a4a8ac | 40% |
| ref/neutral/gray/gray2-a20 | `--ref-neutral-gray2-a20` | #d2d3d6 | 20% |

#### 2.7 中性白色 Neutral White
| Figma 原始路径 | 优化后的 CSS 变量 | 色值 | 不透明度 |
|---------------|-----------------|------|---------|
| ref/neutral/white/white1 | `--ref-neutral-white1` | #ffffff | 100% (纯白) |
| ref/neutral/white/white2 | `--ref-neutral-white2` | rgba(255,255,255,0.8) | 80% |
| ref/neutral/white/white3 | `--ref-neutral-white3` | rgba(255,255,255,0.6) | 60% |
| ref/neutral/white/white4 | `--ref-neutral-white4` | rgba(255,255,255,0.4) | 40% |
| ref/neutral/white/white5 | `--ref-neutral-white5` | rgba(255,255,255,0.3) | 30% |
| ref/neutral/white/white6 | `--ref-neutral-white6` | rgba(255,255,255,0.2) | 20% |

---

## 📝 字体映射表

### 字体变量使用说明
每个字体样式包含 5 个 CSS 变量：
- `font-family`：字体家族
- `font-size`：字号
- `line-height`：行高
- `font-weight`：字重
- `font-style`：字体样式（normal/italic）

**使用示例：**
```css
.text {
  font-family: var(--typography-body-12-strong-font-family, "PingFangSc-Medium", sans-serif);
  font-size: var(--typography-body-12-strong-font-size, 12px);
  line-height: var(--typography-body-12-strong-line-height, 14px);
  font-weight: var(--typography-body-12-strong-font-weight, 500);
}
```

---

### 一、标题字体 Head

#### Typography/Head/18/Head
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Head/18/Head | `--typography-head-18-head-font-family` | PingFangSc-Medium, sans-serif |
| | `--typography-head-18-head-font-size` | 18px |
| | `--typography-head-18-head-line-height` | 20px |
| | `--typography-head-18-head-font-weight` | 500 |
| | `--typography-head-18-head-font-style` | normal |

#### Typography/Head/16/Sub
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Head/16/Sub | `--typography-head-16-sub-font-family` | PingFangSc-Medium, sans-serif |
| | `--typography-head-16-sub-font-size` | 16px |
| | `--typography-head-16-sub-line-height` | 18px |
| | `--typography-head-16-sub-font-weight` | 500 |
| | `--typography-head-16-sub-font-style` | normal |

---

### 二、正文字体 Body

#### Typography/Body/10/Min
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Body/10/Min | `--typography-body-10-min-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-body-10-min-font-size` | 10px |
| | `--typography-body-10-min-line-height` | 11px |
| | `--typography-body-10-min-font-weight` | 400 |
| | `--typography-body-10-min-font-style` | normal |

#### Typography/Body/10/Strong
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Body/10/Strong | `--typography-body-10-strong-font-family` | PingFangSc-Medium, sans-serif |
| | `--typography-body-10-strong-font-size` | 10px |
| | `--typography-body-10-strong-line-height` | 11px |
| | `--typography-body-10-strong-font-weight` | 500 |
| | `--typography-body-10-strong-font-style` | normal |

#### Typography/Body/12/Base
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Body/12/Base | `--typography-body-12-base-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-body-12-base-font-size` | 12px |
| | `--typography-body-12-base-line-height` | 14px |
| | `--typography-body-12-base-font-weight` | 400 |
| | `--typography-body-12-base-font-style` | normal |

#### Typography/Body/12/Strong
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Body/12/Strong | `--typography-body-12-strong-font-family` | PingFangSc-Medium, sans-serif |
| | `--typography-body-12-strong-font-size` | 12px |
| | `--typography-body-12-strong-line-height` | 14px |
| | `--typography-body-12-strong-font-weight` | 500 |
| | `--typography-body-12-strong-font-style` | normal |

#### Typography/Body/14/Further
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Body/14/Further | `--typography-body-14-further-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-body-14-further-font-size` | 14px |
| | `--typography-body-14-further-line-height` | 16px |
| | `--typography-body-14-further-font-weight` | 400 |
| | `--typography-body-14-further-font-style` | normal |

#### Typography/Body/16/Increase
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Body/16/Increase | `--typography-body-16-increase-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-body-16-increase-font-size` | 16px |
| | `--typography-body-16-increase-line-height` | 18px |
| | `--typography-body-16-increase-font-weight` | 400 |
| | `--typography-body-16-increase-font-style` | normal |

---

### 三、链接字体 Link

#### Typography/Link/12/Base
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Link/12/Base | `--typography-link-12-base-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-link-12-base-font-size` | 12px |
| | `--typography-link-12-base-line-height` | 14px |
| | `--typography-link-12-base-font-weight` | 400 |
| | `--typography-link-12-base-font-style` | normal |

#### Typography/Link/14/Further
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Link/14/Further | `--typography-link-14-further-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-link-14-further-font-size` | 14px |
| | `--typography-link-14-further-line-height` | 16px |
| | `--typography-link-14-further-font-weight` | 400 |
| | `--typography-link-14-further-font-style` | normal |

#### Typography/Link/16/Increase
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Link/16/Increase | `--typography-link-16-increase-font-family` | PingFangSc-Regular, sans-serif |
| | `--typography-link-16-increase-font-size` | 16px |
| | `--typography-link-16-increase-line-height` | 18px |
| | `--typography-link-16-increase-font-weight` | 400 |
| | `--typography-link-16-increase-font-style` | normal |

---

### 四、展示数字字体 Display Number（使用 Roboto）

#### Typography/Display/Number/44/XXLarge
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Display/Number/44/XXLarge | `--typography-display-number-44-xxlarge-font-family` | Roboto-Medium, sans-serif |
| | `--typography-display-number-44-xxlarge-font-size` | 44px |
| | `--typography-display-number-44-xxlarge-line-height` | 46px |
| | `--typography-display-number-44-xxlarge-font-weight` | 500 |
| | `--typography-display-number-44-xxlarge-font-style` | normal |

#### Typography/Display/Number/36/XLarge
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Display/Number/36/XLarge | `--typography-display-number-36-xlarge-font-family` | Roboto-Medium, sans-serif |
| | `--typography-display-number-36-xlarge-font-size` | 36px |
| | `--typography-display-number-36-xlarge-line-height` | 38px |
| | `--typography-display-number-36-xlarge-font-weight` | 500 |
| | `--typography-display-number-36-xlarge-font-style` | normal |

#### Typography/Display/Number/26/Large
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Display/Number/26/Large | `--typography-display-number-26-large-font-family` | Roboto-Medium, sans-serif |
| | `--typography-display-number-26-large-font-size` | 26px |
| | `--typography-display-number-26-large-line-height` | 28px |
| | `--typography-display-number-26-large-font-weight` | 500 |
| | `--typography-display-number-26-large-font-style` | normal |

#### Typography/Display/Number/22/Normal
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Display/Number/22/Normal | `--typography-display-number-22-normal-font-family` | Roboto-Medium, sans-serif |
| | `--typography-display-number-22-normal-font-size` | 22px |
| | `--typography-display-number-22-normal-line-height` | 24px |
| | `--typography-display-number-22-normal-font-weight` | 500 |
| | `--typography-display-number-22-normal-font-style` | normal |

---

### 五、展示中文字体 Display Chinese

#### Typography/Display/Chinese/26/Large
| Figma 样式 | CSS 变量 | 值 |
|-----------|---------|-----|
| Typography/Display/Chinese/26/Large | `--typography-display-chinese-26-large-font-family` | PingFangSc-Medium, sans-serif |
| | `--typography-display-chinese-26-large-font-size` | 26px |
| | `--typography-display-chinese-26-large-line-height` | 28px |
| | `--typography-display-chinese-26-large-font-weight` | 500 |
| | `--typography-display-chinese-26-large-font-style` | normal |

---

## 🌟 阴影与效果

### 下投影 Shadow Down
| Figma 效果 | CSS 变量 | 值 |
|-----------|---------|-----|
| Shadow/Down/High | `--shadow-down-high-box-shadow` | 0px 4px 10px -2px rgba(0,0,0,0.04), 0px 8px 16px 0px rgba(0,0,0,0.08), 0px 14px 24px 2px rgba(0,0,0,0.1) |
| Shadow/Down/Normal | `--shadow-down-normal-box-shadow` | 0px 2px 24px -4px rgba(0,0,0,0.02), 0px 4px 26px 0px rgba(0,0,0,0.04), 0px 8px 30px 2px rgba(0,0,0,0.08) |
| Shadow/Down/Low | `--shadow-down-low-box-shadow` | 0px 1px 26px 0px rgba(0,0,0,0.01), 0px 2px 30px 2px rgba(0,0,0,0.02), 0px 4px 34px 2px rgba(0,0,0,0.04) |

### 上投影 Shadow Up
| Figma 效果 | CSS 变量 | 值 |
|-----------|---------|-----|
| Shadow/Up/High | `--shadow-up-high-box-shadow` | 0px -4px 10px -2px rgba(0,0,0,0.04), 0px -8px 16px 0px rgba(0,0,0,0.08), 0px -14px 24px 2px rgba(0,0,0,0.1) |
| Shadow/Up/Normal | `--shadow-up-normal-box-shadow` | 0px -2px 24px -4px rgba(0,0,0,0.02), 0px -4px 26px 0px rgba(0,0,0,0.04), 0px -8px 30px 2px rgba(0,0,0,0.08) |
| Shadow/Up/Low | `--shadow-up-low-box-shadow` | 0px -1px 26px 0px rgba(0,0,0,0.01), 0px -2px 30px 2px rgba(0,0,0,0.02), 0px -4px 34px 2px rgba(0,0,0,0.04) |

### 左投影 Shadow Left
| Figma 效果 | CSS 变量 | 值 |
|-----------|---------|-----|
| Shadow/Left/High | `--shadow-left-high-box-shadow` | -4px 0px 10px -2px rgba(0,0,0,0.04), -8px 0px 16px 0px rgba(0,0,0,0.08), -14px 0px 24px 2px rgba(0,0,0,0.1) |
| Shadow/Left/Normal | `--shadow-left-normal-box-shadow` | -2px 0px 24px -4px rgba(0,0,0,0.02), -4px 0px 26px 0px rgba(0,0,0,0.04), -8px 0px 30px 2px rgba(0,0,0,0.08) |
| Shadow/Left/Low | `--shadow-left-low-box-shadow` | -1px 0px 26px 0px rgba(0,0,0,0.01), -2px 0px 30px 2px rgba(0,0,0,0.02), -4px 0px 34px 2px rgba(0,0,0,0.04) |

### 右投影 Shadow Right
| Figma 效果 | CSS 变量 | 值 |
|-----------|---------|-----|
| Shadow/Right/High | `--shadow-right-high-box-shadow` | 4px 0px 10px -2px rgba(0,0,0,0.04), 8px 0px 16px 0px rgba(0,0,0,0.08), 14px 0px 24px 2px rgba(0,0,0,0.1) |
| Shadow/Right/Normal | `--shadow-right-normal-box-shadow` | 2px 0px 24px -4px rgba(0,0,0,0.02), 4px 0px 26px 0px rgba(0,0,0,0.04), 8px 0px 30px 2px rgba(0,0,0,0.08) |
| Shadow/Right/Low | `--shadow-right-low-box-shadow` | 1px 0px 26px 0px rgba(0,0,0,0.01), 2px 0px 30px 2px rgba(0,0,0,0.02), 4px 0px 34px 2px rgba(0,0,0,0.04) |

### 分割线 Divider
| Figma 效果 | CSS 变量 | 说明 |
|-----------|---------|------|
| Divider | `--divider-box-shadow` | 使用 inset box-shadow 实现的分割线效果 |

---

## 📏 尺寸规范

### 组件尺寸（使用 CSS Class，不使用变量）

| Figma 尺寸标注 | CSS Class | 高度 | 常见内边距 | 圆角 | 使用场景 |
|---------------|-----------|------|-----------|------|---------|
| XL | `.size-xl` | 48px | 16px 左右 | 8px | 超大按钮、主要操作 |
| L | `.size-l` | 44px | 16px 左右 | 8px | 大按钮、次要操作 |
| M | `.size-m` | 28px | 12px 左右 | 4px | 中等按钮、标签、徽章 |
| S | `.size-s` | 24px | 10px 左右 | 4px | 小按钮、标签 |
| XS | `.size-xs` | 16px | 6px 左右 | 2px | 超小按钮、标签、状态点 |

### 圆角规范

| Figma 原始路径 | CSS 变量 | 值 | 适用场景 |
|---------------|---------|-----|---------|
| radius/xlarge | `--radius-xlarge` | 12px | 特大组件（Card、Modal、Dialog 等） |
| radius/large | `--radius-large` | 8px | 大按钮（XL、L 尺寸） |
| radius/default | `--radius-default` | 4px | 常规组件（M、S 尺寸） |
| radius/small | `--radius-small` | 2px | 小组件（XS 尺寸） |

---

## 🏗️ BEM 命名规范

### BEM 结构
```
.block                      # 组件块（独立实体）
.block__element             # 组件内的元素
.block--modifier            # 组件的变体/修饰符
.block__element--modifier   # 元素的变体/修饰符
```

### 修饰符使用规则
- **类型修饰符**：描述组件的视觉类型（如 `type-primary-fill`）
- **状态修饰符**：描述组件的交互状态（如 `status-loading`）
- **尺寸修饰符**：描述组件的尺寸（如 `size-xl`）

### 按钮组件示例
```html
<!-- 基础按钮 -->
<div class="base type-primary-fill status-default size-xl">
  <div class="base__button-text">操作文本</div>
</div>

<!-- 加载中按钮 -->
<div class="base type-primary-fill status-loading size-l">
  <div class="base__loading"></div>
  <div class="base__button-text">操作文本</div>
</div>

<!-- 禁用按钮 -->
<div class="base type-secondary-outline status-disable size-m">
  <div class="base__button-text">操作文本</div>
</div>
```

### CSS 类名组合规则
```css
/* 基础类 */
.base { /* 基础样式 */ }

/* 元素类 */
.base__button-text { /* 文本元素样式 */ }
.base__loading { /* 加载图标样式 */ }
.base__icon { /* 图标元素样式 */ }

/* 类型修饰符（独立类，与基础类组合） */
.base.type-primary-fill { /* 主填充样式 */ }
.base.type-primary-outline { /* 主描边样式 */ }
.base.type-secondary-outline { /* 次描边样式 */ }

/* 状态修饰符（独立类，与基础类组合） */
.base.status-default { /* 默认状态 */ }
.base.status-hover { /* 悬停状态 */ }
.base.status-loading { /* 加载中状态 */ }
.base.status-inactive { /* 非激活状态 */ }
.base.status-disable { /* 禁用状态 */ }

/* 尺寸修饰符（独立类，与基础类组合） */
.base.size-xl { /* 超大尺寸 */ }
.base.size-l { /* 大尺寸 */ }
.base.size-m { /* 中等尺寸 */ }
.base.size-s { /* 小尺寸 */ }
.base.size-xs { /* 超小尺寸 */ }

/* 组合样式（多个修饰符的特定组合） */
.base.type-primary-fill.status-loading { /* 主填充+加载中 */ }
.base.size-xl.type-primary-outline { /* 超大+主描边 */ }
```

---

## 🎯 代码生成规则

### 0. Figma 变量名优化（最重要！）

**从 Figma 读取变量后的第一步：检查并优化变量名**

```javascript
// 伪代码示例：变量名优化逻辑
function optimizeVariableName(figmaPath) {
  // 输入：ref/brand/blue/blue1
  const parts = figmaPath.split('/');
  // parts = ['ref', 'brand', 'blue', 'blue1']
  
  const lastPart = parts[parts.length - 1];      // 'blue1'
  const secondLastPart = parts[parts.length - 2]; // 'blue'
  
  // 检查冗余：blue1 是否以 blue 开头？
  if (lastPart.startsWith(secondLastPart)) {
    // 去掉倒数第二级（冗余的 'blue'）
    parts.splice(parts.length - 2, 1);
    // parts = ['ref', 'brand', 'blue1']
  }
  
  return '--' + parts.join('-');
  // 输出：--ref-brand-blue1 ✅
}
```

**实际操作：**
1. 从 Figma 读取到变量路径（如 `ref/brand/blue/blue8-base`）
2. 转换为 CSS 变量名时检查冗余
3. 去掉重复的中间层级
4. 生成优化后的变量名（如 `--ref-brand-blue8-base`）

### 1. 颜色值处理优先级
```
1️⃣ 优先使用：--sys-* 系统级变量
   示例：var(--sys-primary-default)
   
2️⃣ 其次使用：--ref-* 参考级变量（必须先优化变量名！）
   仅在系统变量无法满足时使用
   示例：var(--ref-brand-blue5)  ✅ 不是 --ref-brand-blue-blue5
   
3️⃣ 最后才用：硬编码色值
   仅作为 var() 的 fallback 值
   示例：var(--sys-primary-default, #4d83ff)
   
❌ 禁止：直接写硬编码色值（除非作为 fallback）
❌ 禁止：使用未优化的冗余变量名（如 --ref-brand-blue-blue1）
```

### 2. 字体样式处理
```css
/* ✅ 正确：使用完整的 typography 变量组 + fallback */
.text {
  font-family: var(--typography-body-12-strong-font-family, "PingFangSc-Medium", sans-serif);
  font-size: var(--typography-body-12-strong-font-size, 12px);
  line-height: var(--typography-body-12-strong-line-height, 14px);
  font-weight: var(--typography-body-12-strong-font-weight, 500);
}

/* ❌ 错误：直接硬编码 */
.text {
  font-size: 12px;
  line-height: 14px;
}
```

### 3. 尺寸处理
```html
<!-- ✅ 正确：使用 class -->
<div class="base size-xl type-primary-fill status-default">

<!-- ❌ 错误：使用内联样式 -->
<div class="base" style="height: 48px;">
```

### 4. 状态组合
```html
<!-- ✅ 正确：类型 + 状态 + 尺寸 -->
<div class="base type-primary-fill status-loading size-l">

<!-- ❌ 错误：缺少必要的修饰符 -->
<div class="base">
```

### 5. 新变量添加流程
当 Figma 中的样式无法映射到现有变量时：

**步骤：**
1. 📋 **列出新值**：说明在 Figma 中的位置和用途
2. 🔍 **检查是否可复用**：确认现有变量是否可以满足
3. 💡 **提出变量名**：遵循现有命名规范
4. ⏸️ **等待确认**：不要自行添加，等待用户确认
5. ✅ **添加后同步更新本文档**

**示例：**
```
发现 Figma 中有新的圆角值：12px
- 位置：Card 组件的圆角
- 现有变量：--radius-large (8px), --radius-default (4px), --radius-small (2px)
- 建议新增：--radius-xlarge: 12px
- 等待确认：是否添加此变量？
```

---

## 📌 快速检查清单

生成新组件代码前，确认以下事项：

### 变量名优化检查（第一优先级！）
- [ ] **所有 Figma 参考级变量都已检查冗余**
- [ ] **冗余的中间层级已去除**（如 `--ref-brand-blue-blue1` → `--ref-brand-blue1`）
- [ ] **特殊后缀已保留**（如 `-base`、`-a10` 等）
- [ ] **系统级变量无需优化**（`--sys-*` 通常无冗余）

### 颜色检查
- [ ] 所有颜色都使用了 `--sys-*` 或优化后的 `--ref-*` 变量
- [ ] 变量都包含了 fallback 值
- [ ] 没有直接硬编码的色值（除了 fallback）
- [ ] 没有使用未优化的冗余变量名

### 字体检查
- [ ] 所有字体样式使用了 `--typography-*` 变量组
- [ ] 包含 font-family, font-size, line-height, font-weight
- [ ] 每个变量都有 fallback 值

### 布局检查
- [ ] 尺寸使用了 `.size-*` class 而非内联样式
- [ ] 圆角使用了 `--radius-*` 变量
- [ ] 间距（gap, padding, margin）使用了合理的值

### 命名检查
- [ ] CSS 类名遵循 BEM 规范
- [ ] Block 名称语义清晰
- [ ] Element 使用双下划线 `__`
- [ ] Modifier 使用单横线 `-` 或点 `.` 连接

### 代码质量
- [ ] 没有重复的样式定义
- [ ] 修饰符类可以灵活组合
- [ ] 代码结构清晰，有适当的注释

### 新变量确认
- [ ] 新变量已列出并说明用途
- [ ] 变量命名符合现有规范
- [ ] 已等待用户确认后才添加

---

## 🚀 使用建议

### 生成新组件时的提示词模板

```
【任务】从 Figma 生成 [组件名称] 组件

【设计系统约束】
✅ 必须参考 CSS_VARIABLE_MAPPING.md 中的映射规则
✅ 【重要】所有参考级变量必须优化命名，去除冗余层级
   示例：ref/brand/blue/blue1 → --ref-brand-blue1（不是 --ref-brand-blue-blue1）
✅ 优先使用 --sys-* 系统级变量
✅ 遵循 BEM 命名规范
✅ 使用 .size-* class 控制尺寸
❌ 禁止自行创建未经确认的新变量
❌ 禁止使用硬编码色值（除了 fallback）
❌ 禁止使用未优化的冗余变量名

【Figma 信息】
文件链接：[你的 Figma 链接]
组件路径：[组件在 Figma 中的位置]

【变量处理流程】
1. 从 Figma 读取变量路径
2. 检查参考级变量（--ref-*）的命名冗余
3. 按照 CSS_VARIABLE_MAPPING.md 中的规则优化变量名
4. 映射到现有的系统变量或参考变量
5. 如有新变量需求，列出并等待确认

【特殊要求】
[如有特殊需求，在此说明]

请先读取现有的 CSS/vars.css 和 CSS/style.css，
理解变量系统和命名优化规则后再开始生成代码。
如有无法映射的新样式，请列出并等待确认。
```

---

## 📖 版本历史

| 版本 | 日期 | 更新内容 |
|-----|------|---------|
| 1.1.0 | 2025-10-13 | **重要更新**：添加 Figma 原始路径映射列，增加变量名优化规则说明 |
| 1.0.0 | 2025-10-13 | 初始版本，基于 Button 组件的变量系统创建 |

---

**文档维护者**：请在每次添加新变量后及时更新本文档  
**使用者**：如有疑问或建议，请在项目中提出

