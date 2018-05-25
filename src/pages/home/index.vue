<template>
  <div>
      <div class="">
        <TabList :list="tabs" @tabChanged="changeTab" />

        <div class="tab-panel" :class="{active: currentTab === 'recommend'}">
          <MomentList :momentArray="recommendArray" :type="recommend"></MomentList>
        </div>
        <div class="tab-panel" :class="{active: currentTab === 'following'}">
          <MomentList :type="following"></MomentList>
        </div>
      </div>
  </div>
</template>

<script>
import MomentList from '@/components/moment/moment-list'
import TabList from '@/components/tab/tab-list'
import fly from '@/utils/mq-fly'
import recommendList from '@/api-mock/recommendmomentlist'

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
      recommendPage: 1,
      recommendSize: 10,
      recommendArray: []
    }
  },
  components: {
    TabList,
    MomentList
  },

  computed: {
  },

  methods: {
    changeTab (type) {
      this.currentTab = type
    },
    jump (type) {
      wx.navigateTo({
        url: `/pages/${type}/main`
      })
    },
    getRecommend () {
      wx.showNavigationBarLoading()
      fly.post('/mq/moments/list', {
        page: this.recommendPage,
        size: this.recommendSize,
        look_user_id: wx.getStorageSync('uid')
      }).then((res) => {
        if (res.code === 1) {
          console.log(res.data)
          // this.recommendArray = this.recommendArray.concat(res.data.recommendArray)
          this.recommendArray = this.recommendArray.concat(recommendList)
          this.recommendPage ++
        }
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
      })
    }
  },
  created () {
    this.getRecommend()
  },
  onShow () {
  },
  // 下拉获取更多数据
  onPullDownRefresh () {
    this.getRecommend()
  },
  // 上拉获取更多数据
  onReachBottom () {
    this.getRecommend()
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
</style>
