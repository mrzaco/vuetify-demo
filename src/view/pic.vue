<template>
    <div>
            <div class="zy-content">

      <transition name="el-zoom-in-top">
        <el-carousel v-show="show1"
                     type='card'
                     :height='screenHeight + "px"'>
          <el-carousel-item v-for='item in src'
                            :key='item'>
            <el-image fit='cover'
                      :height='screenHeight'
                      :src=item></el-image>
          </el-carousel-item>
        </el-carousel>
      </transition>
      <el-container>
        <el-header>
          <el-button @click="show1=!show1"
                     icon="el-icon-caret-right"></el-button>
          <el-button @click="turnTo">跳转</el-button>
        </el-header>
        <el-container>
          <el-aside width='20%'>Aside</el-aside>
          <el-main>

          </el-main>
        </el-container>
      </el-container>
    </div>
    </div>
</template>
<script>
export default {
  data () {
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
    windowHeight () {
      // console.log($(window).height)
    }
  },
  //   mounted () {
  //     const that = this
  //     ;(window.onresize = () => {
  //       return (() => {
  //         that.screenHeight = window.innerHeight / 2
  //         that.screenWidth = (2 * window.innerWidth) / 3
  //         console.log(that.screenHeight)
  //       })()
  //     }),
  //     window.addEventListener('scroll', this.menu)
  //   },
  methods: {
    menu () {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scroll)
      if (this.scroll > this.screenHeight / 3) {
        this.show1 = false
      }
    },
    turnTo () {}
  }
}
</script>
<style lang="less" scoped>
/**背景图 */
.el-carousel__container {
  height: 600px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-image {
  width: 100%;
  height: 100%;
}
.el-image__inner {
  display: inline-block;
}
</style>
