<template>
  <div class="container">
     <collection-list :dataList="dataList"></collection-list>
  </div>
</template>

<script>
import collectionList from '@/components/collection-list'
import fly from '@/utils/mq-fly'

export default {
  data () {
    return {
      dataList: []
    }
  },
  components: {
    collectionList
  },
  computed: {
  },
  methods: {
    getCollectionList () {
      fly.post('/information/listByFavorite', {
        type_id: 7
      }).then(res => {
        if (res.code === 1) {
          console.log(res)
          // this.$set(this.dataList, 0, res.data.list)
          console.log(res.data.list)
          this.dataList = res.data.list
        }
      }).catch(res => {
        console.log(res)
      })
    }
  },
  onShow () {
    this.getCollectionList()
  }
}
</script>

<style scoped>
</style>
