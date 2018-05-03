<template>
  <div class="container">
      <div class="">
        <TabList :list="tabs" @tabChanged="changeTab" />

        <div class="tab-panel" :class="{ active: currentTab === 'recommend'}">
          <MomentList :lifeStatusData="lifeStatusData"></MomentList>
        </div>
        <div class="tab-panel" :class="{ active: currentTab === 'following'}">
          <MomentList :lifeStatusData="[lifeStatusData[1]]"></MomentList>
        </div>
      </div>
  </div>
</template>

<script>
import MomentList from '@/components/moment/moment-list'
import TabList from '@/components/tab/tab-list'
import TabContent from '@/components/tab/tab-content'

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
    TabList,
    TabContent,
    MomentList
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
