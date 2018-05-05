<template>
  <div class="bottom">
    <div class="title">
      我的收藏
      <span>{{ lists.length }}</span>
    </div>
    <div class="photos" v-for="(item, index) in lists" :key="index">
      <img :src="item.imgList[0]" alt="" @click="jump(item.id, item.status, item.type_id)">
    </div>
  </div>
</template>
<script>
export default {
  props: ['dataList'],
  data () {
    return {}
  },
  computed: {
    lists () {
      return this.dataList[0]
    }
  },
  methods: {
    jump (id, status, typeId) {
      wx.navigateTo({
        url: `/pages/moment/main`
      })
    }
  },
  created () {
    console.log(this.dataList)
  }
}
</script>
<style scoped lang="scss">
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

