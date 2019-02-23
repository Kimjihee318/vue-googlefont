<template>
  <div id="middle-wrapper" v-show="show">
    <ul id="option-wrapper">
      <li>
        <select v-model="message">
          <option v-for="(item, index) in this.$store.state.stringArr" :key="index"
          :value="item.content">
            {{ item.val }}
          </option>
        </select>
      </li>
      <li>
        <select v-model="weight">
          <option v-for="(item, index) in weights" :key="index"
          :value="item.content">{{ item.val }}
          </option>
        </select>
      </li>
      <li>
        <label>{{ $store.state.defaultOptions.fontSize }}</label>
        <input type="range" name="sizeRange" min="1" max="90" v-model="$store.state.defaultOptions.fontSize">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    show () {
      return this.$store.state.showOption.show
    },
    strings (){
      return 
    },
    weights (){
      return this.$store.state.weightArr
    },
    message: {
      get () {
        return this.$store.state.defaultOptions.text
      },
      set (value) {
        this.$store.commit('textVmodel', value)
      }
    },
    weight: {
      get () {
        return this.$store.state.defaultOptions.fontWeight
      },
      set (value) {
        this.$store.commit('weightVmodel', value)
      }
    },
    size: {
      get () {
        return this.$store.state.defaultOptions.fontSize
      },
      set (value) {
        this.$store.commit('sizeVmodel', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/setup/variables.scss";
  @import "../styles/components/range.scss";
  @import "../styles/components/selectBox.scss";
  @import "../styles/views/compMiddle.scss";

</style>