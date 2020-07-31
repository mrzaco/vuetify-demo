<template>
  <div id='app'>

    <router-view />
  </div>
</template>
<script src="//y.gtimg.cn/music/h5/player/player.js?max_age=2592000"></script>
<script>
// import child from './components/child.vue'
export default {
  name: 'App',
  data() {
    return {
      src: [
        'https://pic4.zhimg.com/v2-b4c2b52b116660f3f675564580b50215_r.jpg',
        'https://picb.zhimg.com/80/v2-246f0b816cb992730d48ec72dc72236b_720w.jpg',
        'https://picb.zhimg.com/v2-31c0b5e1550c1ae4b67da6f25f7243b9_r.jpg'
      ],
      height: '',
      show1: true,
      screenHeight: window.innerHeight / 2,
      screenWidth: window.innerWidth / 2,
      scroll: ''
    }
  },

  watch: {
    windowHeight() {
      // console.log($(window).height)
    }
  },
    beforeCreate () {
    document.querySelector('body').setAttribute('style', ' margin:0');
    document.querySelector('body').setAttribute('style', ' margin:0');

  },
  mounted() {
    const that = this
    ;(window.onresize = () => {
      return (() => {
        that.screenHeight = window.innerHeight / 2
        that.screenWidth = (2 * window.innerWidth) / 3
        console.log(that.screenHeight)
      })()
    }),
      window.addEventListener('scroll', this.menu)
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scroll)
      if (this.scroll > this.screenHeight / 3) {
        this.show1 = false
      }
    },
    turnTo() {}
  }
  //   components: { child }
}
</script>

<style  scoped lang="less">
html {
  height: 100%;
}
// body {
//   margin:0;
//   padding:0;
//   font-family: sans-serif;
//   background: linear-gradient(#141e30, #243b55);
// }
#app {

 background: linear-gradient(#141e30, #243b55);
 height: 100%;
 height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.zy-content {
  width: 100%;
  margin-top: 50px;
}
/**布局 */
.el-row {
  position: fixed;

  height: 50px;
  width: 100%;
  top: 0;
  padding-top: 8px;
  // margin-bottom: 20px;
  background-color: #999;
  vertical-align: middle;

  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
