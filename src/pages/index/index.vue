<template>
  <div class="container">
      <div class="">
        <div class="header-bar">
          <div class="for-recommend" :class="{ active: showRecommend}" @click="changeContent('recommend')">推荐</div>
          <div class="for-attention" :class="{ active: !showRecommend}" @click="changeContent('attention')">关注</div>
        </div>

        <div class="recommend">
          <dynamic-details :lifeStatusData="lifeStatusData"></dynamic-details>
        </div>

        <div class="attention"></div>
      </div>
  </div>
</template>

<script>
import dynamicDetails from '@/components/dynamicDetails'

import lifeStatusData from '@/api-mock/recommendmomentlist'

export default {
  data () {
    return {
      showRecommend: true,
      lifeStatusData
    }
  },
  components: {
    dynamicDetails
  },

  computed: {
  },

  methods: {
    changeContent (type) {
      (type === 'recommend') ? this.showRecommend = true : this.showRecommend = false
    },
    jump (type) {
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    }
  },
  created () {
  },

  onShow () {
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
  margin-top: 88rpx;
  z-index: 10;
}
.header-bar {
  width: 100%;
  background-color: #ffe955;
  position: fixed;
  top: 0;
  z-index: 11;
}
.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rpx; 
  background: #000000;
}
.for-recommend,
.for-attention {
  display: inline-block;
  line-height: 88rpx;
  font-size: 30rpx;
  color: #000;
  margin-left: 52rpx;
  font-weight: bold;
  position: relative;
}
</style>
