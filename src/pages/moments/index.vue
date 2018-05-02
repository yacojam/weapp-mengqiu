<template>
  <div class="container">
      <div class="">
        <div class="header-bar">
          <div class="for-recommend" :class="{ active: type === 'recommend'}" @click="changeTab('recommend')">推荐</div>
          <div class="for-attention" :class="{ active: type === 'attention'}" @click="changeTab('attention')">关注</div>
        </div>

        <div class="recommend" :class="{ active: type === 'recommend'}" >
          <moment-list :lifeStatusData="lifeStatusData"></moment-list>
        </div>
        <div class="recommend" :class="{ active: type === 'attention'}" >
          <moment-list></moment-list>
        </div>

        <div class="attention"></div>
      </div>
  </div>
</template>

<script>
import momentList from '@/components/moment/moment-list'

import lifeStatusData from '@/api-mock/recommendmomentlist'

export default {
  data () {
    return {
      type: 'recommend',
      lifeStatusData
    }
  },
  components: {
    momentList
  },

  computed: {
  },

  methods: {
    changeTab (type) {
      this.type === type
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
