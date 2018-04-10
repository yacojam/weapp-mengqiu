<template>
    <div class="container">
        <lists :from="type"></lists>
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
      type: 'concern'
    }
  },
  methods: {},
  created () {}
}
</script>

<style scoped>

</style>
