<template>
  <div class="container">
    <div class="top">
      <img :src="user.avatar" alt="">
      <p>
        <span>{{user.name}}</span>
        <span>{{user.des}}</span>
      </p>
    </div>
    <div class="center">
      <ul>
        <li><p>{{user.publish}}</p><p>发布</p></li>
        <li><p>{{user.fellow}}</p><p>关注</p></li>
        <li><p>{{user.fans}}</p><p>粉丝</p></li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li>我的消息</li>
        <li>我的收藏</li>
        <li>意见反馈</li>
        <li>关于萌球</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        avatar: '',
        name: '',
        des: '',
        publish: 0,
        fellow: 0,
        fans: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../common/sass/variable';
  .top {
    background: $color-normal;
    width: 100%;
    height: 336rpx;
    box-sizing: border-box;
    padding-top: 56rpx;
  }
  .center {
    width: 100%;
    height: 143rpx;
    position: relative;
  }
  .center ul{
    position: absolute;
    left: 64rpx;
    top: -92rpx;
    width: 622rpx;
    height: 184rpx;
    box-sizing: border-box;
    background: rgba(255,255,255,.88);
    border-radius: 20rpx;
    display: flex;
    padding: 24rpx 0rpx;
  }
  .center ul li {
    text-align:center;
    flex: 1;
  }
  .center ul li p:last-child {
    @include font-26-normal;
    margin-top: 24rpx;
  }
  .center ul li p:first-child {
    @include font-32;
    margin-top: 24rpx;
  }
  .bottom {
    width: 100%;
  }
  .bottom ul{
    display:flex;
    padding-left: 64rpx;
    flex-direction: column;
    border-bottom: 1rpx solid $color-splitline;
    background: #fff;
  }
  .bottom ul li {
    @include font-32-median;
    line-height: 88rpx;
    border-bottom: 1rpx solid $color-splitline;
  }
</style>
