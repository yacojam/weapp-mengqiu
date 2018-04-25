<template>
  <div class="container">
    <div class="logo animated" :style="{ opacity: logoOpacity,display: logoDisplay }">
      <img src="/static/imgs/default.png" alt="logo图">
    </div>
      <div class="animated" :style="{ opacity , display}">
        <div class="header-bar">
          <div class="for-recommend" :class="{ active: showRecommend}" @click="changeContent('recommend')">推荐</div>
          <div class="for-attention" :class="{ active: !showRecommend}" @click="changeContent('attention')">关注</div>
        </div>

        <div class="recommend">
          <dynamic-details :lifeStatusData="lifeStatusData"></dynamic-details>
        </div>

        <div class="attention"></div>
      </div>
    <div @click="jump('release')" class="write">
      <img src="/static/imgs/index/feed_btn_write_nor@3x.png" alt="">
    </div>
  </div>
</template>

<script>
import dynamicDetails from '@/components/dynamicDetails'

export default {
  data () {
    return {
      showRecommend: true,
      opacity: 0,
      display: 'none',
      lifeStatusData: [
        {
          name: 'Sabar',
          time: '09:32',
          subtime: '昨天',
          headLogo: '/static/imgs/default.png',
          title: '这种天气最适合带着丫丫出去遛弯儿啦~~',
          imgSrc: ['/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png', '/static/imgs/material/1.png']
        },
        {
          name: 'Aaron',
          time: '11:22',
          subtime: '',
          headLogo: '/static/imgs/material/1.png',
          title: '最喜欢我家的小狗狗了~~！',
          imgSrc: ['/static/imgs/material/1.png']
        }
      ]
    }
  },
  components: {
    dynamicDetails
  },

  computed: {
    logoOpacity: function () {
      return 1 - this.opacity
    },
    logoDisplay: function () {
      return this.display === 'none' ? 'block' : 'none'
    }
  },

  methods: {
    changeContent (type) {
      (type === 'recommend') ? this.showRecommend = true : this.showRecommend = false
    },
    jump (type) {
      console.log(type)
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    }
  },
  created () {
    let that = this
    setTimeout(() => {
      wx.showTabBar()
      that.opacity = 1
      that.display = 'block'
    }, 2000)
  },

  onShow () {
    if (this.display === 'none' && this.opacity === 0) {
      wx.hideTabBar()
    }
  }
}
</script>

<style scoped>
.animated {
  transition:all 2s;
  -moz-transition:all 2s; /* Firefox 4 */
  -webkit-transition:all 2s; /* Safari and Chrome */
  -o-transition:all 2s; /* Opera */
}
.logo {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
.logo img {
  width: 100%;
  height: 100%;
}
.recommend {
  width: 100%;
  background-color: #fff;
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
.write {
  position: fixed;
  right: 28rpx;
  bottom: 5rpx;
}
.write img {
  width: 124rpx;
  height: 140rpx;
}


</style>
