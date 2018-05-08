<template>
  <div class="user-shows-content">
    <moment-item v-for="(item, index) in momentArray" :moment="item" :key="index">
    </moment-item>
  </div>
</template>

<script>
import fly from '@/utils/mq-fly'
import momentItem from './moment-item'
import recommendList from '@/api-mock/recommendmomentlist'

export default {
  components: {
    momentItem
  },
  data () {
    return {
      page: 1,
      momentArray: recommendList
    }
  },
  props: {
    type: {
      type: String,
      default: 'recommend'
    }
  },
  computed: {
  },
  methods: {
    async loadMoments () {
      wx.showLoading({
        title: '加载中'
      })
      let res = await fly.post('/mq/moments/list', {
        // tab: this.currentTab.type,
        page: this.page,
        size: 10,
        look_user_id: wx.getStorageSync('uid')
      })
      if (res.code === 1) {
        this.momentArray = this.momentArray.concat(res.data.list)
      }
      wx.hideLoading()
    }
  },
  async created () {
    // this.loadMoments()
  }
}
</script>

<style scoped>
.user-shows-content {
  padding: 0 0;
  background-color: #fff;
}
</style>

