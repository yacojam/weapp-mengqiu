<template>
  <div>
    <tabs @tabChanged="handleChange" :tabs="['评论','赞']"></tabs>
    {{text}}
  </div>
</template>

<script>
import tabs from '@/components/NavbarTabs'
export default {
  name: "index",
  data () {
    return {
      text: ''
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
    tabs
  }
}
</script>

<style scoped>

</style>
