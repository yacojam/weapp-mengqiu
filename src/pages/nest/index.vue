<template>
  <div>
    <TabList @tabChanged="navTabChanged" :list="tabs"></TabList>

    <div class="tab-panel" :class="{active: currentTab === 'moments'}">
      <PublishList :publishList="publishList"></PublishList>
    </div>
    <div class="tab-panel" :class="{active: currentTab === 'collection'}">
    </div>
  </div>
</template>

<script>
import PublishList from '../../components/publish-list'
import TabList from '../../components/tab/tab-list'
import fly from '@/utils/mq-fly'

export default {
  name: 'nest',
  data () {
    return {
      tabs: [
        {
          id: 'moments',
          title: '时光'
        }, {
          id: 'collection',
          title: '收藏'
        }
      ],
      currentTab: 'moments',
      lookUserId: 0,
      page: 1,
      size: 10,
      first: true,
      publishList: [
      ]
    }
  },
  components: {
    PublishList, TabList
  },
  methods: {
    getUserRelease () {
      // 用户id不存在
      if (this.lookUserId === 0) {
        this.publishList = []
        return
      }
      // 存在用户id
      fly.post('mq/moments/list', {
        page: this.page,
        size: this.size,
        'look_user_id': this.lookUserId
      }).then((res) => {
        if (res.code === 1) {
          this.publishList = res.data.list
        }
      })
    },
    getlistByFavorite () {
      if (this.lookUserId === 0) {
        this.publishList = []
        return
      }
      fly.post('information/listByFavorite', {
        type_id: 7
      }).then((res) => {
        if (res.code === 1) {
          console.log(res)
          this.publishList = res.data.list
        }
      })
    },
    navTabChanged (value) {
      this.currentTab = value

      if (value === 'moments') {
        this.getUserRelease()
      } else {
        this.getlistByFavorite()
      }
    }
  },
  onShow () {
    if (this.first) {
      this.lookUserId = wx.getStorageSync('uid')
    }
    this.getUserRelease()
  }
}
</script>

<style scoped>

</style>
