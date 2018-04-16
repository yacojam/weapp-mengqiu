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
        <img class="fansBtn" src="/static/imgs/index/userhome_btn_followed_pressed@3x.png" alt="">
      </div>
    </div>

    <latest-release-list :photos="photos"></latest-release-list>
    
  </div>
</template>

<script>
import latestReleaseList from '@/components/latestReleaseList'
export default {
  data () {
    return {
      name: 'Evelynn',
      des: '你们地球人就喜欢猜',
      avatar: require('../../../static/imgs/index/0.jpg'),
      fellow: 0,
      fans: 0,
      isFellowed: true,
      photos: [
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg'
      ]
    }
  },
  methods: {
    jump (type = 'details') {
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    }
  },
  components: {
    latestReleaseList
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
  
</style>
