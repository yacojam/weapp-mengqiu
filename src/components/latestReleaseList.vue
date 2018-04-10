<template>
  <div class="bottom">
    <div class="title">
      最新发布
      <span>{{ photos.length }}</span>
    </div>
    <div class="photos">
      <img v-for="(item, index) in photos" :key="index" :src="item" alt="" @click="jump()">
    </div>
  </div>
</template>
<script>
export default {
  props: ['photos'],
  data () {
    return {}
  },
  methods: {
    jump (type = 'details') {
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import "../common/sass/variable";
.bottom .title {
  @include font-32;
  line-height: 109rpx;
  text-indent: 40rpx;
  width: 100%;
  height: 109rpx;
  span {
    @include font-32-median;
    color: $color-message-less;
    margin-left: 24rpx;
  }
}
.bottom .photos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bottom .photos img {
  width: 246rpx;
  height: 246rpx;
  margin-bottom: 6rpx;
}
</style>

