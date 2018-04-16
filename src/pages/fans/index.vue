<template>
    <div class="container">
        <lists :form="type" v-if="!empty" :listData="fansData"></lists>
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
  methods: {},
  created () {}
}
</script>

<style scoped>

</style>
