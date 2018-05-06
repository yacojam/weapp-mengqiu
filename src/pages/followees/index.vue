<template>
    <div class="container">
        <lists :from="type" v-if="!empty" :listData="concernData"></lists>
        <EmptyTemplate :type="type" v-if="empty"></EmptyTemplate>
    </div>
</template>

<script>
import lists from '@/components/lists'
import EmptyTemplate from '@/components/empty-template'
import fly from '@/utils/mq-fly'

export default {
  components: {
    lists,
    EmptyTemplate
  },
  data () {
    return {
      type: 'concern',
      empty: false,
      concernData: [
        {
          name: '我是第一名',
          headLogo: '/static/images/material/1.png',
          status: 'followed'
        },
        {
          name: '我的第二名',
          headLogo: '/static/images/index/0.jpg',
          status: 'unfollowed'
        },
        {
          name: '我的倒数第一名',
          headLogo: '/static/images/default.png',
          status: 'followed'
        }
      ]
    }
  },
  methods: {
    getConcernList () {
      let id = wx.getStorageSync('uid')
      fly.post('information/listByFavorite', {
        look_user_id: id,
        type_id: 8
      }).then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
    }
  },
  created () {},
  onShow () {
    this.getConcernList()
  }
}
</script>

<style scoped>

</style>
