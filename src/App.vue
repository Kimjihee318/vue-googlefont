<template>
  <div id="app">
   <layout></layout>
  </div>
</template>

<script>
import layout from './components/layout.vue'
export default {
  components: {
    layout
  }
}
</script>

<style lang="scss">
  // global css
  * {
    // opacity: 0.8;
    box-sizing: border-box;
    // outline: 1px solid #ddd;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
</style>