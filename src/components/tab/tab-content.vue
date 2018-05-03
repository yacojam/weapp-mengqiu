<template>
 <div class="tab-panel" :class="{ active: selected}">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'tab-content',
  props: [
    'selected'
  ],
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped>
.tab-panel {
  display: none;
}
.tab-panel.active {
  display: block;
}
</style>
