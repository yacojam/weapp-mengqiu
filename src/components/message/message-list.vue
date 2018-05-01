<template>
  <div>
    <ul class="MessageList">
      <li v-for="(item, index) in list" :key="index">
        <div class="avatar">
          <img :src="item.avatar" alt="">
        </div>
        <p>
          <span class="name">{{item.name}}</span>
          <span class="comment">
            <span>评论了你的动态</span>
          </span>
          <span class="information">{{item.information}}</span><br>

          <span class="time">{{item.time}}</span>
        </p>
        <img class="img" :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        'default': []
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/sass/variable';
  .MessageList {
    display:flex;
    width: 100%;
    flex-direction: column;
    padding-left: 40rpx;
    box-sizing: border-box;
  }
  .MessageList li {
    height: 148rpx;
    display:flex;
    align-items:center;
    border-bottom: 1rpx solid $color-splitline;
    position: relative;
  }
  .MessageList li .avatar img{
    @include image-avatar-small;
    margin-right: 26rpx;
  }
  .MessageList li .name {
    @include font-26;
    margin-right: 12rpx;
  }
  .MessageList li .time {
    @include font-22;
    opacity: 0.7;
    margin-top: 18rpx;
  }
  .MessageList li .comment {
    @include font-26-median;
  }
  .MessageList li .information {
    @include font-26;
    margin-left: 12rpx;
  }
  .MessageList li .img {
    position: absolute;
    top: 28rpx;
    right: 40rpx;
    width: 92rpx;
    height: 92rpx;
  }
</style>
