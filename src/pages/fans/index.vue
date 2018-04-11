<template>
    <div class="container">
        <lists :form="type" v-if="!empty"></lists>
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
      empty: true
    }
  },
  methods: {},
  created () {}
}
</script>

<style scoped>

</style>
