<template>
  <div class="container">

    <div class="header-bar">
      <div class="for-recommend" :class="{ active: showRecommend}" @click="changeContent('recommend')">推荐</div>
      <div class="for-attention" :class="{ active: !showRecommend}" @click="changeContent('attention')">关注</div>
    </div>

    <div class="recommend">
      <div class="user-shows-content">
        <div class="head-portrait left-correction">
          <img src="../../../static/imgs/index/feed_icon_photo@3x.png" alt="用户头像">
        </div>
        <div class="info">
          <p class="name">Sabar</p>
          <p class="time"><span class="subtime">昨天</span>09:32</p>
        </div>

        <p class="title left-correction">这种天气最适合带着丫丫出去遛弯儿啦~~</p>

        <div class="big-show">
          <img src="../../../static/imgs/index/0.jpg" alt="展示用大图" mode="scaleToFill" width="100%">
        </div>

        <div class="operate left-correction">
          <span class="like">
            <img src="../../../static/imgs/index/feed_icon_collect_nor@2x.png" alt="like">
          </span>
          <span class="forward">
            <img src="../../../static/imgs/index/feed_icon_share@2x.png" alt="like">
          </span>
          <span class="give-like">
            <img src="../../../static/imgs/index/feed_icon_like_nor@2x.png" alt="like">
          </span>
          <span class="likes-counts">36</span>
          <span class="comments">
            <img src="../../../static/imgs/index/feed_icon_comment@2x.png" alt="like">
          </span>
          <span class="comments-counts">11</span>
        </div>

        <div class="bottom-line"></div>
      </div>
    </div>

    <div class="attention"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showRecommend: true
    }
  },

  components: {},

  methods: {
    changeContent (type) {
      (type === 'recommend') ? this.showRecommend = true : this.showRecommend = false
    }
  },

  created () {}
}
</script>

<style scoped>
.left-correction {
  padding-left: 40rpx;
}
.header-bar {
  width: 100%;
  background-color: #ffe955;
}
.active {
  border-bottom: 8rpx solid #000;
}

.for-recommend,
.for-attention {
  display: inline-block;
  padding: 25rpx 2rpx;
  font-size: 30rpx;
  color: #000;
  margin-left: 50rpx;
}

.head-portrait img {
  width: 66rpx;
  height: 66rpx;
  border-radius: 50%;
}

.recommend {
  width: 100%;
}
.user-shows-content {
  padding: 40rpx 0 0;
}
.info,
.head-portrait {
  display: inline-block;
  height: 60rpx;
  margin-bottom: 50rpx;
}
.info {
  vertical-align: bottom;
  margin-left: 26rpx;
}
.info .name {
  font-family: "HelveticaNeueLTPro Md";
  font-size: 26rpx;
  color: #000;
  margin-bottom: 14rpx;
}
.info .time {
  font-family: "HelveticaNeueLTPro Lt";
  font-size: 22rpx;
  color: #000;
  opacity: 0.7;
}
.time .subtime {
  margin-right: 12rpx;
}
.recommend .title {
  font-size: 32rpx;
  font-family: "PingFang SC";
  margin-bottom: 30rpx;
}
.recommend .big-show img {
  width: 100%;
  height: 500rpx;
}
.operate {
  display: flex;
  align-items: center;
  padding-top: 30rpx; 
  padding-bottom: 30rpx; 
}
.operate img {
  width: 46rpx;
  height: 46rpx;
}
.operate .likes-counts,
.operate .comments-counts {
  font-family: "HelveticaNeueLTPro Roman";
  font-size: 32rpx;
  color: #000;
  display: inline-block;
  width: 80rpx;
}
.operate .like, .operate .forward {
  margin-right: 46rpx;
}
.operate .give-like, .operate .comments {
  margin-right: 16rpx;
} 

.bottom-line {
  width: 100%;
  background-color: #f1f1fa;
  height: 18rpx;
}
</style>
