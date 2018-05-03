<template>
  <div>
    <tab-list @tabChanged="handleChange" :list="tabs"></tab-list>
    <MessageList :list="list"></MessageList>
  </div>
</template>

<script>
import MessageList from '@/components/message/message-list'
import tabList from '@/components/tab/tab-list'

export default {
  name: 'index',
  data () {
    return {
      tabs: [
        {
          id: 'comments',
          title: '评论'
        }, {
          id: 'likes',
          title: '赞'
        }
      ],
      currentTab: 'comments',
      text: '',
      list: [
        {
          avatar: '/static/imgs/index/0.jpg',
          name: 'Sabar',
          time: '9:32',
          img: '/static/imgs/index/0.jpg',
          information: '哈哈哈'
        },
        {
          avatar: '/static/imgs/index/0.jpg',
          name: 'Sabar',
          time: '9:32',
          img: '/static/imgs/index/0.jpg',
          information: '哈哈哈'
        },
        {
          avatar: '/static/imgs/index/0.jpg',
          name: 'Sabar',
          time: '9:32',
          img: '/static/imgs/index/0.jpg',
          information: '哈哈哈'
        },
        {
          avatar: '/static/imgs/index/0.jpg',
          name: 'Sabar',
          time: '9:32',
          img: '/static/imgs/index/0.jpg',
          information: '哈哈哈'
        }
      ]
    }
  },
  methods: {
    handleChange (tab) {
      this.currentTab = tab
      if (tab === 'comments') {
        this.text = '评论页面'
      } else {
        this.text = '赞'
      }
    }
  },
  components: {
    tabList, MessageList
  }
}
</script>

<style scoped>

</style>
