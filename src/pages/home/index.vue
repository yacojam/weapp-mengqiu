<template>
  <div class="container">
      <div class="">
        <tab-list :list="tabs" @tabChanged="changeTab" />

        <div class="tab-panel" :class="{ active: currentTab === 'recommend'}">
          <moment-list :lifeStatusData="lifeStatusData"></moment-list>
        </div>
        <div class="tab-panel" :class="{ active: currentTab === 'following'}">
          <moment-list :lifeStatusData="[lifeStatusData[1]]"></moment-list>
        </div>
      </div>
  </div>
</template>

<script>
import momentList from '@/components/moment/moment-list'
import tabList from '@/components/tab/tab-list'

import lifeStatusData from '@/api-mock/recommendmomentlist'

export default {
  data () {
    return {
      tabs: [
        {
          id: 'recommend',
          title: '推荐'
        }, {
          id: 'following',
          title: '关注'
        }
      ],
      currentTab: 'recommend',
      lifeStatusData
    }
  },
  components: {
    tabList,
    momentList
  },

  computed: {
  },

  methods: {
    changeTab (type) {
      this.currentTab === type
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
.tab-panel {
  display: none;
}
.tab-panel.active {
  display: block;
}
</style>
