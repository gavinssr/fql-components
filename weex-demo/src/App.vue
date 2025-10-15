<template>
  <div class="container">
    <text class="title">欢迎使用Weex!</text>
    <text class="subtitle">这是一个Weex应用示例</text>
    <div class="button-container">
      <text class="button" @click="handleClick">点击我</text>
    </div>
    <text class="message">{{ message }}</text>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '点击按钮查看效果'
    }
  },
  methods: {
    handleClick() {
      this.message = 'Hello Weex! 你成功点击了按钮！'
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.title {
  font-size: 32px;
  color: #42b983;
  margin-bottom: 20px;
  text-align: center;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
}

.button-container {
  margin-bottom: 30px;
}

.button {
  background-color: #42b983;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  text-align: center;
}

.message {
  font-size: 16px;
  color: #333;
  text-align: center;
  margin-top: 20px;
}
</style>