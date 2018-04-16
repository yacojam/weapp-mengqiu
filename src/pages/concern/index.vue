<template>
    <div class="container">
        <lists :from="type" v-if="!empty" :listData="concernData"></lists>
        <empty-template :type="type" v-if="empty"></empty-template>
    </div>
</template>

<script>
import lists from '@/components/lists'
import emptyTemplate from '@/components/emptyTemplate'

export default {
  components: {
    lists,
    emptyTemplate
  },
  data () {
    return {
      type: 'concern',
      empty: false,
      concernData: [
        {
          name: '我是第一名',
          headLogo: '/static/imgs/material/1.png',
          status: 'followed'
        },
        {
          name: '我的第二名',
          headLogo: '/static/imgs/index/0.jpg',
          status: 'unfollowed'
        },
        {
          name: '我的倒数第一名',
          headLogo: '/static/imgs/default.png',
          status: 'followed'
        }
      ]
    }
  },
  methods: {},
  created () {}
}
</script>

<style scoped>

</style>
