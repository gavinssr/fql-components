# Weex Demo 项目

这是一个使用Vue.js和Weex构建的跨平台移动应用示例项目。

## 项目结构

```
weex-demo/
├── src/
│   ├── App.vue          # 主应用组件
│   └── main.js          # 应用入口
├── weex.config.js       # Weex配置文件
├── .env.weex           # Weex环境变量
└── package.json        # 项目依赖配置
```

## 安装依赖

```bash
npm install
```

## 开发命令

### 启动开发服务器
```bash
npm run weex:serve
```

### 构建生产版本
```bash
npm run weex:build
```

### 普通Vue开发模式
```bash
npm run serve
```

## Weex特性

- **跨平台**: 一套代码运行在iOS、Android和Web平台
- **Vue语法**: 使用熟悉的Vue.js开发体验
- **组件化**: 丰富的内置组件和API
- **高性能**: 接近原生应用的性能表现

## 开发说明

1. 项目使用Vue 3 + Weex技术栈
2. 支持热重载和实时预览
3. 可以同时开发Web版本和移动端版本
4. 使用Weex组件替代部分HTML元素

## 注意事项

- Weex组件与HTML元素有差异，请参考Weex官方文档
- 样式编写需要遵循Weex规范
- 某些Web API在移动端可能不可用