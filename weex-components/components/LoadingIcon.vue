<template>
  <div class="loading-container" :style="containerStyle">
    <image 
      ref="loadingImage"
      :src="iconSrc" 
      :style="imageStyle"
      class="loading-icon"
    />
  </div>
</template>

<script>
/**
 * Loading旋转图标组件
 * 使用Weex Animation模块实现与HTML版本一致的旋转动画
 */

const animation = weex.requireModule('animation');

export default {
  name: 'LoadingIcon',
  props: {
    // 图标类型: white | blue
    type: {
      type: String,
      default: 'white',
      validator: (value) => {
        return ['white', 'blue'].includes(value);
      }
    },
    // 图标尺寸
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    containerStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        alignItems: 'center',
        justifyContent: 'center'
      };
    },
    imageStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      };
    },
    iconSrc() {
      // 这里需要替换为实际的图标路径
      // 可以是本地路径或CDN地址
      if (this.type === 'white') {
        return require('../assets/loading-white.svg');
      }
      return require('../assets/loading-blue.svg');
    }
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    this.stopRotation();
  },
  methods: {
    /**
     * 开始旋转动画
     * 使用Weex animation模块实现360度无限循环旋转
     * 与HTML版本的CSS animation效果一致
     */
    startRotation() {
      const el = this.$refs.loadingImage;
      if (!el) return;

      // 创建旋转动画
      this.rotationTimer = setInterval(() => {
        animation.transition(el, {
          styles: {
            transform: 'rotate(360deg)',
            transformOrigin: 'center center'
          },
          duration: 1000, // 1秒完成一次旋转，与HTML版本一致
          timingFunction: 'linear', // 线性动画
          delay: 0
        }, () => {
          // 动画完成后重置为0度，准备下一次旋转
          animation.transition(el, {
            styles: {
              transform: 'rotate(0deg)'
            },
            duration: 0
          });
        });
      }, 1000);
    },

    /**
     * 停止旋转动画
     */
    stopRotation() {
      if (this.rotationTimer) {
        clearInterval(this.rotationTimer);
        this.rotationTimer = null;
      }
    }
  }
};
</script>

<style scoped>
.loading-container {
  position: relative;
}

.loading-icon {
  /* Weex的transform动画会自动应用 */
}
</style>
