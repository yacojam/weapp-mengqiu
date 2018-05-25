<template>
  <div class="user-shows-content">
    <moment-item v-for="(item, index) in momentArray" :moment="item" :key="index">
    </moment-item>
  </div>
</template>

<script>
import momentItem from './moment-item'
// import recommendList from '@/api-mock/recommendmomentlist'

export default {
  components: {
    momentItem
  },
  props: {
    type: {
      type: String,
      default: 'recommend'
    },
    momentArray: {
      type: Array,
      'default': []
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.user-shows-content {
  padding: 0 0;
  background-color: #fff;
}
</style>

