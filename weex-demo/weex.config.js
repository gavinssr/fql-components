const path = require('path')

module.exports = {
  // Weex配置
  weex: {
    // 入口文件
    entry: 'src/main.js',
    // 输出目录
    output: 'dist',
    // 平台配置
    platforms: ['ios', 'android', 'web'],
    // 开发服务器配置
    devServer: {
      port: 8080,
      host: '0.0.0.0'
    }
  },
  // Webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        'weex-vue-render': path.resolve(__dirname, 'node_modules/weex-vue-render')
      }
    }
  }
}