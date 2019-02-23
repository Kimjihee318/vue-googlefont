<template>
  <div id="middle-wrapper" v-show="this.$store.state.showOption.show">
    <ul id="option-wrapper">
      <li>
        <select v-model="message">
          <option v-for="(item, index) in strings" :key="index"
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
        <label>{{ font.information.defaultOptions.fontSize }}</label>
        <input type="range" name="sizeRange" min="1" max="90" v-model="font.information.defaultOptions.fontSize">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    font: {
      type: Object,
      required: true
    },
    num: {
      type: Number,
      default: ' ',
      required: true
    }
  },
  computed: {
    nums (){
      return this.$props.num
    },
    strings (){
      return this.font.information.stringArr
    },
    weights (){
      return this.font.information.weightArr
    },
    message: {
      get () {
        return this.font.information.defaultOptions.text
      },
      set (value) {
        this.$store.commit('textVmodel', {
          value: value,
          num: this.nums
        })
      }
    },
    weight: {
      get () {
        return this.font.information.defaultOptions.fontWeight
      },
      set (value) {
        this.$store.commit('weightVmodel', {
          value: value,
          num: this.nums
        })
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