<template>
  <div class="tabs">
    <ul>
      <li @click.stop="handleClick(index)" :class="{'active':selectedIndex === index }" class="tabItem" v-for="(item, index) in tabs" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab-panel',
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
}
.tabs > ul {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display:flex;
  background: #ffe955;
  z-index: 10;
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
  height: 6rpx;
  background: #000000;
}
</style>
