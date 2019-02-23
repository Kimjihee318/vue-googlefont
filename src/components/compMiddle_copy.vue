<template>
  <div id="middle-wrapper" v-show="show">
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
        <label>{{ fontSizes }}</label>
        <input type="range" name="sizeRange" min="1" max="90" v-model="sizes">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapState({
          // defalutState: state => state.static,
          // show: state => state.static.showOption.show,
          // strings: state => state.static.stringArr,
          // weights: state => state.static.weightArr,
          // sizes: state => state.static.showOption.show
      }),
      message: {
        get () {
          return defalutState.defaultOptions.text
        },
        set (value) {
          this.$store.commit('textVmodel', value)
        }
      },
      weight: {
        get () {
          return defalutState.defaultOptions.fontWeight
        },
        set (value) {
          this.$store.commit('weightVmodel', value)
        }
      },
      size: {
        get () {
          return defalutState.defaultOptions.fontSize
        },
        set (value) {
          this.$store.commit('sizeVmodel', value)
        }
      }
    },
    methods: {
      ...mapMutations({
        textVmodel: 'static/textVmodel',
        weightVmodel: 'static/weightVmodel',
        sizeVmodel: 'static/sizeVmodel',
        clickPlus: 'static/clickPlus'
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/setup/variables.scss";
  @import "../styles/components/range.scss";
  @import "../styles/components/selectBox.scss";

  ul {
    width: 100%;
    height: 2rem;
    li {
      float: left;
      width: 30%;
      margin-left: 1.65%;
      margin-right: 1.65%;
      border-right: 1px solid $base-color;
    }
  }
</style>