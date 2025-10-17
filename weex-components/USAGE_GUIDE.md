# 使用指南

## 📚 快速开始

### 1. 安装依赖

将 `weex-components` 目录复制到您的 Weex 项目中。

### 2. 引入组件

```javascript
// 方式1: 引入单个组件
import FqlButton from '@/weex-components/components/FqlButton.vue';

export default {
  components: {
    FqlButton
  }
};
```

```javascript
// 方式2: 引入整个组件库
import FenqileUI from '@/weex-components/entry.js';

Vue.use(FenqileUI);
```

### 3. 使用组件

```vue
<template>
  <div>
    <fql-button 
      type="primary-fill" 
      size="xl" 
      text="立即购买"
      @click="handleBuy"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleBuy() {
      console.log('购买按钮被点击');
    }
  }
};
</script>
```

## 🎨 按钮类型详解

### Primary Fill（主要填充按钮）

最高优先级的操作按钮，用于主要操作。

```vue
<fql-button type="primary-fill" size="xl" text="主要操作" />
```

**使用场景**：
- 页面主要操作（如"提交"、"确认"、"立即购买"）
- 每个页面/弹窗只建议有一个 Primary Fill 按钮

### Primary Outline（主要描边按钮）

次要操作按钮，优先级低于 Primary Fill。

```vue
<fql-button type="primary-outline" size="xl" text="次要操作" />
```

**使用场景**：
- 与 Primary Fill 配对使用
- 次要但重要的操作（如"取消"、"返回"）

### Secondary Outline（次要描边按钮）

最低优先级的操作按钮。

```vue
<fql-button type="secondary-outline" size="xl" text="其他操作" />
```

**使用场景**：
- 辅助性操作
- 列表项中的操作按钮

## 📏 尺寸规格

| 尺寸 | 值 | 高度 | 宽度 | 使用场景 |
|------|-----|------|------|----------|
| XL | xl | 48px | 355px | 页面主要操作、底部固定按钮 |
| L | l | 44px | 327px | 弹窗确认、表单提交 |
| M | m | 28px | 自适应(最小72px) | 卡片内操作、工具栏 |
| S | s | 24px | 自适应(最小68px) | 列表项操作 |
| XS | xs | 16px | 自适应(最小52px) | 标签、小图标按钮 |

```vue
<!-- 不同尺寸示例 -->
<fql-button type="primary-fill" size="xl" text="超大按钮" />
<fql-button type="primary-fill" size="l" text="大按钮" />
<fql-button type="primary-fill" size="m" text="中按钮" />
<fql-button type="primary-fill" size="s" text="小按钮" />
<fql-button type="primary-fill" size="xs" text="迷你" />
```

## 🔄 状态说明

### Default（默认状态）

正常可点击状态。

```vue
<fql-button status="default" text="点击我" @click="handleClick" />
```

### Loading（加载状态）

执行异步操作时显示，不可点击，带旋转动画（仅 XL 和 L 尺寸显示图标）。

```vue
<fql-button 
  status="loading" 
  text="加载中..." 
/>
```

**实现方式**：
```vue
<template>
  <fql-button 
    :status="isLoading ? 'loading' : 'default'"
    text="提交"
    @click="handleSubmit"
  />
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      try {
        await this.submitData();
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
```

### Inactive（未激活状态）

用于表示当前不可操作但可能变为可用的状态（如未满足条件）。

```vue
<fql-button 
  status="inactive" 
  text="需满足条件"
/>
```

### Disable（禁用状态）

完全禁用，不可点击，用于永久不可用的操作。

```vue
<fql-button 
  status="disable" 
  text="不可用"
/>
```

## 🎯 完整示例

### 示例1: 表单提交

```vue
<template>
  <div class="form-container">
    <input v-model="username" placeholder="请输入用户名" />
    <input v-model="password" type="password" placeholder="请输入密码" />
    
    <fql-button 
      type="primary-fill"
      size="xl"
      :status="submitStatus"
      text="登录"
      @click="handleLogin"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isSubmitting: false
    };
  },
  computed: {
    submitStatus() {
      if (this.isSubmitting) return 'loading';
      if (!this.username || !this.password) return 'inactive';
      return 'default';
    }
  },
  methods: {
    async handleLogin() {
      this.isSubmitting = true;
      try {
        await this.login({
          username: this.username,
          password: this.password
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>
```

### 示例2: 确认对话框

```vue
<template>
  <div class="dialog">
    <text class="dialog-title">确认删除？</text>
    <text class="dialog-message">此操作不可恢复</text>
    
    <div class="dialog-buttons">
      <fql-button 
        type="secondary-outline"
        size="l"
        text="取消"
        @click="handleCancel"
      />
      <fql-button 
        type="primary-fill"
        size="l"
        :status="deleteStatus"
        text="确认删除"
        @click="handleDelete"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDeleting: false
    };
  },
  computed: {
    deleteStatus() {
      return this.isDeleting ? 'loading' : 'default';
    }
  },
  methods: {
    handleCancel() {
      this.$emit('cancel');
    },
    async handleDelete() {
      this.isDeleting = true;
      try {
        await this.deleteItem();
        this.$emit('deleted');
      } finally {
        this.isDeleting = false;
      }
    }
  }
};
</script>

<style scoped>
.dialog-buttons {
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.dialog-buttons > * {
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
}
</style>
```

### 示例3: 列表操作按钮

```vue
<template>
  <div class="list-item">
    <text class="item-title">商品名称</text>
    <div class="item-actions">
      <fql-button 
        type="secondary-outline"
        size="s"
        text="编辑"
        @click="handleEdit"
      />
      <fql-button 
        type="primary-outline"
        size="s"
        text="查看"
        @click="handleView"
      />
    </div>
  </div>
</template>

<style scoped>
.item-actions {
  flex-direction: row;
}

.item-actions > * {
  margin-left: 8px;
}
</style>
```

## 🎨 样式变量使用

### 在组件中使用设计系统变量

```vue
<template>
  <div :style="containerStyle">
    <fql-button type="primary-fill" size="xl" text="按钮" />
  </div>
</template>

<script>
import vars from '@/weex-components/styles/weex-vars.js';

export default {
  data() {
    return {
      containerStyle: {
        backgroundColor: vars.sysColor.pageBackgroundFill,
        borderRadius: vars.radius.large + 'px',
        padding: '20px'
      }
    };
  }
};
</script>
```

### 使用 style-mixin

```vue
<script>
import styleMixin from '@/weex-components/mixins/style-mixin.js';

export default {
  mixins: [styleMixin],
  computed: {
    cardStyle() {
      return {
        backgroundColor: this.getSysColor('white'),
        borderRadius: this.getRadius('large') + 'px',
        ...this.getTypography('body14Further')
      };
    }
  }
};
</script>
```

## ⚠️ 注意事项

### 1. SVG 图标路径配置

需要在 `LoadingIcon.vue` 中配置实际的图标路径：

```javascript
// LoadingIcon.vue
iconSrc() {
  if (this.type === 'white') {
    // 方式1: 使用CDN
    return 'https://your-cdn.com/assets/loading-white.svg';
    
    // 方式2: 使用本地资源
    return require('../assets/loading-white.svg');
    
    // 方式3: 使用base64（推荐，无网络请求）
    return 'data:image/svg+xml;base64,...';
  }
  return ...;
}
```

### 2. 字体配置

确保项目中已配置 PingFang SC 和 Roboto 字体：

```javascript
// 在 Weex 项目入口配置
// iOS: 系统自带 PingFang SC
// Android: 需要添加字体文件

const fonts = [
  { fontFamily: 'PingFangSc-Regular', src: 'local://fonts/PingFangSC-Regular.ttf' },
  { fontFamily: 'PingFangSc-Medium', src: 'local://fonts/PingFangSC-Medium.ttf' },
  { fontFamily: 'Roboto', src: 'local://fonts/Roboto-Regular.ttf' }
];
```

### 3. 性能优化

**Loading 动画优化**：
- Loading 动画使用 Weex Animation 模块
- 在低端设备上，可以降低动画帧率
- 组件销毁时会自动停止动画

**按钮点击防抖**：
```vue
<script>
export default {
  data() {
    return {
      isSubmitting: false
    };
  },
  methods: {
    async handleClick() {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      try {
        await this.doSomething();
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>
```

### 4. Weex 平台差异

**Android vs iOS**：
- 边框细线在 Android 上可能显示较粗，使用 0.5px 可能会被渲染为 1px
- 字体渲染可能存在细微差异
- 动画性能 iOS 通常优于 Android

**建议**：
- 在真机上测试所有状态和尺寸
- 关键页面进行性能监控
- 根据平台差异适当调整样式

## 🔧 高级用法

### 自定义按钮内容

使用插槽自定义按钮内容：

```vue
<fql-button type="primary-fill" size="xl">
  <text>🛒 加入购物车</text>
</fql-button>
```

### 动态状态切换

```vue
<template>
  <fql-button 
    :status="buttonStatus"
    :text="buttonText"
    @click="handleAction"
  />
</template>

<script>
export default {
  data() {
    return {
      countdown: 0,
      isProcessing: false
    };
  },
  computed: {
    buttonStatus() {
      if (this.isProcessing) return 'loading';
      if (this.countdown > 0) return 'disable';
      return 'default';
    },
    buttonText() {
      if (this.countdown > 0) return `${this.countdown}秒后重试`;
      return '发送验证码';
    }
  },
  methods: {
    async handleAction() {
      this.isProcessing = true;
      try {
        await this.sendCode();
        this.startCountdown();
      } finally {
        this.isProcessing = false;
      }
    },
    startCountdown() {
      this.countdown = 60;
      const timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
};
</script>
```

## 📞 技术支持

如有问题，请联系前端团队或查看项目 README.md。
