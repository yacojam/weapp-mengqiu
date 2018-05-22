<template>
  <div class="tab-page-container">
    <TabList @tabChanged="navTabChanged" :list="tabs"></TabList>

    <div class="tab-panel" :class="{active: currentTab === 'moments'}">
      <PublishList :publishList="publishList"></PublishList>
      <div @click="jump('publish')" class="btn-publish">
        <img src="/static/images/publish/feed_btn_write_nor@2x.png" alt="" mode="widthFix">
      </div>
    </div>
    <div class="tab-panel" :class="{active: currentTab === 'collection'}">
      <PublishList :publishList="favoriteList"></PublishList>
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
      ],
      favoriteList: [
      ]
    }
  },
  components: {
    PublishList, TabList
  },
  methods: {
    jump (type, query) {
      let url = `/pages/${type}/main`
      // url添加query参数
      if (query) {
        url += '?'
        for (let key in query) {
          url += `${key}=${query[key]}&`
        }
        url = url.substr(0, url.length - 1)
      }
      wx.navigateTo({
        url: url
      })
    },
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
        this.favoriteList = []
        return
      }
      fly.post('information/listByFavorite', {
        type_id: 7
      }).then((res) => {
        if (res.code === 1) {
          this.favoriteList = res.data.list
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
  .btn-publish {
    position: fixed;
    right: 20rpx;
    bottom: 20rpx;
  }
  .btn-publish img {
    width: 156rpx;
  }
</style>
