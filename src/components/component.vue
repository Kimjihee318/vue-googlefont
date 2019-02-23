<template>
  <div id=component-wrapper>
    <div v-for="(item, index) in fonts" :key="index" 
    v-show="isVisible[index]"
    :style="{'background-color': colorIn}">
      <i @click="clickPlus" class="material-icons">add_circle</i>
      <h4>{{ item.information.name }}</h4>
       <p>{{ item.information.designer}}</p>
      <compMiddle :num="index" :font="item">
      </compMiddle>
      <compBody :num="index"></compBody>
    </div>
  </div>
</template>

<script>
// import compMiddle from './compMiddle.vue'
import compMiddle from './compM_2.vue'
import compBody from './compBody.vue'
import compTest from './compTest.vue'
import _ from 'lodash'

export default {
  components: {
    compMiddle,
    compBody,
  },
  computed: {
    fonts (){
      return this.$store.state.fonts
    },
    isVisible (){
      return this.$store.getters.isVisible
    },
     colorIn (){
      return this.$store.state.showOption.colorIn
    }
  },
  methods: {
    clickPlus(){
      this.$store.commit('clickPlus');
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../styles/setup/variables.scss";
  @import "../styles/views/component.scss";
</style>