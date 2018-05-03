<template>
  <div class="tabs">
    <ul>
      <li @click.stop="handleClick(index, tab)" :class="{'active':currentIndex === index }" 
        class="tab-item" v-for="(tab, index) in list" :key="tab.id">{{tab.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props: [
    'defaultTab',
    'list'
  ],
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handleClick (index, tab) {
      this.currentIndex = index
    }
  },
  watch: {
    currentIndex (nowIndex, oldIndex) {
      if (nowIndex === oldIndex) {
        return
      } else {
        this.$emit('tabChanged', this.list[nowIndex].id)
      }
    }
  },
  created () {
    this.$emit('tabChanged', this.list[this.currentIndex].id)
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
.tab-item {
  line-height: 88rpx;
  margin-left:52rpx;
  font-size: 30rpx;
  color: #000000;
  font-weight:bold;
  font-family: 'PingFang';
  position: relative;
}
.tab-item.active::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 6rpx;
  background: #000000;
}
</style>
