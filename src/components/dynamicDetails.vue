<template>
    <div class="user-shows-content" >
      <div v-for="(item, index) in lifeStatusData" :key="index" class="items">
        <div class="head-portrait left-correction">
            <img :src="item.headLogo" alt="用户头像">
        </div>
        <div class="info">
            <p class="name">{{ item.name }}</p>
            <p class="time">
                <span class="subtime">{{ item.subtime }}</span>{{ item.time }}</p>
        </div>

        <p class="title left-correction">{{ item.title }}</p>

        <div class="big-show">
            <img :src="item.imgSrc" alt="展示用大图" mode="scaleToFill" width="100%">
        </div>

        <div class="operate left-correction">
            <span class="like">
                <img src="/static/imgs/index/feed_icon_collect_nor@2x.png" alt="like">
            </span>
            <span class="forward">
                <img src="/static/imgs/index/feed_icon_share@2x.png" alt="like">
            </span>
            <span class="give-like">
                <img src="/static/imgs/index/feed_icon_like_nor@2x.png" alt="like">
            </span>
            <span class="likes-counts">36</span>
            <a href="/pages/comments/main" class="comments">
                <img src="/static/imgs/index/feed_icon_comment@2x.png" alt="like">
            </a>
            <span class="comments-counts">11</span>
        </div>

        <div class="bottom-line"></div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      lifeStatusData: [
        {
          name: 'Sabar',
          time: '09:32',
          subtime: '昨天',
          headLogo: '/static/imgs/default.png',
          title: '这种天气最适合带着丫丫出去遛弯儿啦~~',
          imgSrc: '/static/imgs/material/1.png'
        },
        {
          name: 'Aaron',
          time: '11:22',
          subtime: '',
          headLogo: '/static/imgs/material/1.png',
          title: '最喜欢我家的小狗狗了~~！',
          imgSrc: '/static/imgs/material/1.png'
        }
      ]
    }
  },
  methods: {},
  created () {}
}
</script>

<style scoped>
.items {
  padding-top: 40rpx;
}
.left-correction {
  padding-left: 40rpx;
}

.head-portrait img {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
}

.user-shows-content {
  padding:0 0;
  background-color: #fff;
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
.user-shows-content .title {
  font-size: 32rpx;
  font-family: "PingFang SC";
  margin-bottom: 30rpx;
}
.user-shows-content .big-show img {
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
.operate .like,
.operate .forward {
  margin-right: 46rpx;
}
.operate .give-like,
.operate .comments {
  margin-right: 16rpx;
}

.bottom-line {
  width: 100%;
  background-color: #f1f1fa;
  height: 18rpx;
}
</style>

