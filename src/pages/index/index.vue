<template>
  <div class="container">

    <div class="header-bar">
      <div class="for-recommend" :class="{ active: showRecommend}" @click="changeContent('recommend')">推荐</div>
      <div class="for-attention" :class="{ active: !showRecommend}" @click="changeContent('attention')">关注</div>
    </div>

    <div class="recommend">
      <dynamic-details></dynamic-details>
    </div>

    <div class="attention"></div>

  </div>
</template>

<script>
import dynamicDetails from '@/components/dynamicDetails'
export default {
  data () {
    return {
      showRecommend: true
    }
  },
  components: {
    dynamicDetails
  },

  methods: {
    changeContent (type) {
      (type === 'recommend') ? this.showRecommend = true : this.showRecommend = false
    }
  },

  created () {}
}
</script>

<style scoped>
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
