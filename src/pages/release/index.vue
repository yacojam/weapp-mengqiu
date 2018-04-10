<template>
  <div class="container">
     <div class="content">
       <div class="take-picture">
         <img @click="jump('upload')" src="../../../static/imgs/release/feed_icon_photo@3x.png" alt="挑个片">
         <p>挑个片</p>
       </div>
       <div class="take-video">
         <img @click="jump('uploadVideo')" src="../../../static/imgs/release/feed_icon_shoot@3x.png" alt="拍个片">
         <p>拍个片</p>
       </div>
     </div>
    <div class="back">
      <img @click="backIndexPage" src="../../../static/imgs/release/feed_icon_close@3x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  methods: {
    backIndexPage () {
      wx.switchTab({
        url: `/pages/index/main`
      })
      wx.showTabBar({
        animation: true
      })
    },
    jump (type) {
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    }
  },
  created () {
  },
  onShow () {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f1f1fa',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    wx.hideTabBar({
      animation: true
    })
  }
}
</script>

<style scoped>
  .content ,.cancle{
    width: 100%;
    position: absolute;
    bottom: 198rpx;
  }
  .cancle{
    bottom: 10rpx;
  }
  .take-picture,.take-video {
    display: inline-block;
    font-size: 30rpx;
    font-family: 'PingFang SC';
  }
  .take-picture p,.take-video p{
    text-align: center;
    margin-top: 38rpx;
  }
  .take-picture img,.take-video img {
    width: 132rpx;
    height: 132rpx;
    border-radius: 50%;
    display: inline-block;
  }
  .take-picture{
    margin-left: 160rpx;
    margin-right: 166rpx;
  }
  .back {
    width: 100%;
    text-align:center;
    position:absolute;
    left: 0;
    bottom: 10rpx;
  }
  .back img {
    width: 75rpx;
    height: 75rpx;
  }
</style>
