<template>
    <div class="empty">
        <img :src="emptyImageUrl" alt="空值图" model="scaleToFill">
    </div>
</template>

<script>
export default {
  name: ' empty-template',
  props: ['emptyImageUrl'],
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.empty img {
    width: 330rpx;
    height: 440rpx;
    margin: auto;
}
</style>
