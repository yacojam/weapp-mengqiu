<template>
    <div class="container">
        <dynamicDetails></dynamicDetails>
    </div>
</template>

<script>
import dynamicDetails from '@/components/dynamicDetails'

export default {
  components: {
    dynamicDetails
  },
  data () {
    return {}
  },
  methods: {},
  created () {}
}
</script>

<style scoped>
.container {
    width: 100%;
    background-color: #fff;
}
</style>
