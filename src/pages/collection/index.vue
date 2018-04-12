<template>
  <div class="container">
     <latest-release-list :photos="photos"></latest-release-list>
  </div>
</template>

<script>
import latestReleaseList from '@/components/latestReleaseList'
export default {
  data () {
    return {
      photos: [
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg',
        '/static/imgs/index/0.jpg'
      ]
    }
  },
  components: {
    latestReleaseList
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
</style>
