<template>
  <div class="tabs">
    <ul>
      <li @click.stop="handleClick(index)" :class="{'active':selectedIndex === index }" class="tabItem" v-for="(item, index) in tabs" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  props: [
    'tabs'
  ],
  data () {
    return {
      selectedIndex: 0
    }
  },
  methods: {
    handleClick (index) {
      this.selectedIndex = index
    }
  },
  watch: {
    selectedIndex (nowIndex, oldIndex) {
      if (nowIndex === oldIndex) {
        return
      } else {
        this.$emit('tabChanged', nowIndex)
      }
    }
  },
  created () {
    this.$emit('tabChanged', this.selectedIndex)
  }
}
</script>

<style scoped>
.tabs {
  width: 100%;
  height: 88rpx;
  background: #ffe955;
}
.tabs > ul {
  display:flex;
}
.tabItem {
  line-height: 88rpx;
  margin-left:52rpx;
  font-size: 30rpx;
  color: #000000;
  font-weight:bold;
  font-family: 'PingFang';
  position: relative;
}
.tabItem.active::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 5rpx;
  background: #000000;
}
</style>
