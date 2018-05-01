<template>
  <div>
    <tab-page @tabChanged="navTabChanged" :tabs="['时光','收藏']"></tab-page>
    <publish-list :publishList="publishList"></publish-list>
  </div>
</template>

<script>
import publishList from '../../components/publish-list'
import tabPage from '../../components/tab-page'
import fly from '../../../utils/mqIO'
export default {
  name: 'nest',
  data () {
    return {
      lookUserId: 0,
      page: 1,
      size: 10,
      first: true,
      publishList: [
      ]
    }
  },
  components: {
    publishList, tabPage
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
      if (value === 0) {
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
