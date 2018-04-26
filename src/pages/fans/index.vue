<template>
    <div class="container">
        <lists :form="type" v-if="!empty" :listData="fansData"></lists>
        <empty-template :type="type" v-if="empty"></empty-template>
    </div>
</template>

<script>
import lists from '@/components/lists'
import emptyTemplate from '@/components/emptyTemplate'
import fly from '@/../utils/mqIO'

export default {
  components: {
    lists,
    emptyTemplate
  },
  data () {
    return {
      type: 'fans',
      empty: false,
      fansData: [
        {
          name: '可爱大小姐',
          headLogo: '/static/imgs/material/1.png',
          status: 'followed'
        },
        {
          name: '养猫大王',
          headLogo: '/static/imgs/index/0.jpg',
          status: 'unfollowed'
        },
        {
          name: '吸猫第一名',
          headLogo: '/static/imgs/default.png',
          status: 'followed'
        }
      ]
    }
  },
  methods: {
    getFansList () {
      let id = wx.getStorageSync('uid')
      fly.post('information/listByFans', {
        look_user_id: id
      }).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
    }
  },
  created () {},
  onShow () {
    // this.fansData = this.getFansList()
    this.getFansList()
  }
}
</script>

<style scoped>

</style>
