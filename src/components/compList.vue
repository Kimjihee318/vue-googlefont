<template>
  <div id="comps">
    <p>Viewing {{ this.fontsNum }} of {{ this.allfontsNum }} font families</p>
    <comp></comp>
    <comp></comp>
    <comp></comp>
    <comp></comp>
  </div>
</template>

<script>
import comp from './component.vue'
export default {
  components: {
    comp
  },
  computed: {
    allfontsNum (){
      return this.$store.state.fonts.length
    },
    fontsNum (){
      let filtered = this.$store.getters.isVisible.filter(font => font == true)
      return filtered.length
    }
  }
}
</script>
<style>
  #comps>p {
    padding-left: 1rem;
    margin-bottom: 0;
    font-weight: 400;
    color: #bbb;
  }
</style>