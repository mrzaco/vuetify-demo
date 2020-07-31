<template>
  <div>
    <div class="div1"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    var arr = [1, 2, 3, 4, 5, 8, 8.447, 1.222]

    console.log(...arr)
  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
.div1 {
  width: 300px;
  height: 100px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: pink;
  animation-name: test;
  animation-duration: 3s;
  // 时间函数👇
  animation-timing-function: ease;
  // 延迟时间👇
  animation-delay: 0s;
  // 循环次数
  animation-iteration-count: infinite;
  // 动画方向
  animation-direction: normal;
  // 播放状态
  animation-play-state: running;
  // 填充模式
  animation-fill-mode: none;
}
/* 关于keyframes关键帧的内容稍后介绍     */
@keyframes test {
  0% {
    background-color: lightblue;
  }
  30% {
    background-color: lightgreen;
  }
  60% {
    background-color: lightgray;
    width: 600px;
  }
  100% {
    background-color: #999;
  }
}
</style>
