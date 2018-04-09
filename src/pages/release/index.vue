<template>
  <div class="container">
     <div class="content">
       <div class="take-picture">
         <img src="../../../static/imgs/release/feed_icon_photo@3x.png" alt="挑个片">
         <p>挑个片</p>
       </div>
       <div class="take-video">
         <img src="../../../static/imgs/release/feed_icon_shoot@3x.png" alt="拍个片">
         <p>拍个片</p>
       </div>
     </div>
     <div class="cancle">
       <img src="../../../static/imgs/release/feed_icon_close@3x.png" alt="退出">
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
  },
  created () {
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
  .cancle {
    width: 100%;
    text-align: center;
  }
  .cancle img {
    width: 76rpx;
    height: 76rpx;
    border-radius: 50%;
  }
</style>
