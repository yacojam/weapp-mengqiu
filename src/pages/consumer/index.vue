<template>
  <div>
    <div class="top">
      <div>
        <img class="avatar" :src="avatar" alt="">
      </div>
      <p class="name">{{name}}</p>
      <p class="des">{{des}}</p>
      <p class="fellow"><span>{{fellow}}</span>关注 <span>{{fans}}</span>粉丝</p>
      <div>
        <img class="fansBtn" src="../../../static/imgs/index/userhome_btn_followed_pressed@3x.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        最新发布 <span>{{photoNum}}</span>
      </div>
      <div class="photos">
        <img v-for="(item, index) in photos" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'Evelynn',
        des: '你们地球人就喜欢猜',
        avatar: require('../../../static/imgs/index/0.jpg'),
        fellow: 0,
        fans: 0,
        isFellowed: true,
        photoNum: 18,
        photos: [
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg',
          '../../../static/imgs/index/0.jpg'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/sass/variable';
.top {
  width: 100%;
  height: 526rpx;
  background: $color-normal;
  display:flex;
  flex-direction: column;
  align-items:center;
}
  .top .avatar{
    @include image-avatar-large;
    border:4rpx solid #000;
    margin-top: 56rpx;
  }
  .top .name {
    @include font-46;
    margin-top: 25rpx;
  }
  .top .des {
    @include font-26-normal;
    opacity: 0.7;
    margin-top: 12rpx;
  }
  .top .fellow {
    @include font-32;
    margin-top: 30rpx;
    span {
      display:inline-block;
      width: 80rpx;
      text-align:center;
    }
    span:last-child {
      margin-left: 35rpx;
    }
  }
  .top .fansBtn {
    width: 156rpx;
    height: 68rpx;
    margin-top: 25rpx;
  }
  .bottom {

  }
  .bottom .title {
    @include font-32;
    line-height: 109rpx;
    text-indent: 40rpx;
    width: 100%;
    height: 109rpx;
    span {
      @include font-32-median;
      color:$color-message-less;
      margin-left: 24rpx;
    }
  }
  .bottom .photos {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .bottom .photos img{
    width: 246rpx;
    height: 246rpx;
    margin-bottom: 6rpx;
  }
</style>
