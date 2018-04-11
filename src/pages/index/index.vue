<template>
  <div class="container">
    <div class="logo animated" :style="{ opacity: logoOpacity,display: logoDisplay }">
      <img src="../../../static/imgs/default.png" alt="logo图">
    </div>
      <div class="animated" :style="{ opacity , display}">
        <div class="header-bar">
          <div class="for-recommend" :class="{ active: showRecommend}" @click="changeContent('recommend')">推荐</div>
          <div class="for-attention" :class="{ active: !showRecommend}" @click="changeContent('attention')">关注</div>
        </div>

        <div class="recommend">
          <dynamic-details></dynamic-details>
        </div>

        <div class="attention"></div>
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
      display: 'none'
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

</style>
