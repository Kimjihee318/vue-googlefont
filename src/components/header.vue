<template>
  <div id="header">
    <h2>JIHEE'S LAP</h2>
    <ul>
      <li>DIRECTORY</li>
      <li>FEATURED</li>
      <li>ARTICLES</li>
      <li>ABOUT</li>
      <li><i class="material-icons">color_lens</i>
      </li>
       <ul class="color-pick">
         <li v-for="(color, index) in colors" :key="index" @click="getCol(color)">
           <!-- shoul have width height -->
           <div class="color-circle" :style="{'background-color':color.color}"></div>
         </li>
       </ul>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    colors (){
      return this.$store.state.showOption.colors
    },
  },
  methods: {
    getCol (color){
      this.$store.commit('colorVmodel', color);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/layout.scss";
  .color-pick {
    // display: flex;
    width: 70px;
    height: 60px;
    border-left: 1px solid #ddd;
    li {
      // align-content: space-between;
      // align-items: stretch;
      // flex-basis: 50%;
      float: left;
      width: 50%;
      height: 50%;
    }
  }
  .color-circle {
    margin: 0 auto;
    margin-top: 2px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    &:last-child {
      border: 1px solid #ddd;
    }
  }
</style>
