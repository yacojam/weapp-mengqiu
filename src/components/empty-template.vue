<template>
    <div class="empty">
        <img class="logo" :src="emptyImageUrl || '/static/images/empty/no-data@2x.png'" alt="空值图" mode="widthFix">
        <p class="title" >{{title}}</p>
        <p class="hint" >{{hint}}</p>
    </div>
</template>

<script>
export default {
  name: ' EmptyTemplate',
  props: ['emptyImageUrl', 'title', 'hint'],
  data () {
    return {}
  },
  methods: {},
  watch: {},
  created () {}
}
</script>

<style scoped>
.empty{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
}
.empty img.logo {
    width: 330rpx;
}
.empty .title {
    margin-top: 12rpx;
    font-size: 40rpx;
    color: #999;
}

.empty .hint {
    margin-top: 15rpx;
    font-size: 32rpx;
    color: #999;
}
</style>
