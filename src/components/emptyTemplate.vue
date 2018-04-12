<template>
    <div class="empty">
        <img :src="emptyTypeUrl" alt="空值图" model="scaleToFill">
    </div>
</template>

<script>
export default {
  name: ' emptyTemplate',
  props: ['type'],
  data () {
    return {}
  },
  computed: {
    emptyTypeUrl: function () {
      return `/static/imgs/empty/empty-${this.type}@2x.png`
    }
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
