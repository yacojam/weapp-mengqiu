<template>
  <div>
    <tabs @tabChanged="handleChange" :tabs="['评论','赞']"></tabs>
    <MessageList :list="list"></MessageList>
  </div>
</template>

<script>
import MessageList from '@/components/MessageList/MessageList'
import tabs from '@/components/NavbarTabs/NavbarTabs'
export default {
  name: 'index',
  data () {
    return {
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
    handleChange (index) {
      if (index === 0) {
        this.text = '评论页面'
      } else {
        this.text = '赞'
      }
    }
  },
  components: {
    tabs, MessageList
  }
}
</script>

<style scoped>

</style>
