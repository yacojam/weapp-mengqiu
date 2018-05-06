<template>
  <div>
    <textarea placeholder="暂无签名" v-model="text"></textarea>
    <div class="send">
      <img src="/static/images/index/feed_btn_send_press@3x.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  textarea {
    @include font-32-median;
    width: 100%;
    height: 437rpx;
    padding-top: 28rpx;
    padding-left: 37rpx;
    padding-right: 37rpx;
    box-sizing: border-box;
    border-bottom: 1rpx solid $color-splitline;
  }
  ._textarea {
    @include font-32-median;
    font-weight: normal;
  }
  .send {
    margin-top: 80rpx;
    width: 100%;
    text-align:center;
    img {
      width: 315rpx;
      height: 87rpx;
    }
  }
</style>
