<template>
    <div class="lists">
        <div class="list-item" v-for="(item, index) in listData" :key="index">
            <div class="left">
                <div class="head">
                    <img :src="item.headLogo" alt="示例图">
                </div>
                <div class="name">
                    {{ item.name }}
                </div>
            </div>
            <div class="operate">
                <img :src="'/static/imgs/lists/fans_btn_'+item.status+'@2x.png'" alt="示例图">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: ' lists',
  props: ['from', 'listData'],
  data () {
    return {}
  },
  methods: {},
  watch: {},
  created () {}
}
</script>

<style scoped>
.lists {
    background-color: #fff;
}
.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30rpx 40rpx;
    border-bottom: 2rpx solid #e0e0e0;
}
.left {
    display: flex;
    align-items: center;
}
.head {
    width: 60rpx;
    height: 60rpx;
}
.head img {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
}
.name {
    font-family: "HelveticaNeueLTPro Md";
    font-size: 26rpx;
    color: #000;
    margin-left: 26rpx;
}
.operate {
}
.operate img {
    width: 122rpx;
    height: 54rpx;
}
</style>
