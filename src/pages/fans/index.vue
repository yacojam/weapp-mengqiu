<template>
    <div class="container">
        <lists :form="type"></lists>
    </div>
</template>

<script>
import lists from '@/components/lists'

export default {
  components: {
    lists
  },
  data () {
    return {
      type: 'fans'
    }
  },
  methods: {},
  created () {}
}
</script>

<style scoped>

</style>
