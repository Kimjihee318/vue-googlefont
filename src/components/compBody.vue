<template>
  <div>
    <div id="text-box" :style="{'font-weight': weight, 'font-size': size + 'px'}">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: ' ',
      required: true
    }
  },
  computed: {
    fonts (){
      return this.$store.state.fonts
    },
    nums (){
      return this.$props.num
    },
    strings (){
      return this.fonts[this.nums].information.stringArr
    },
    message: {
      get () {
        return this.fonts[this.nums].information.defaultOptions.text
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
        return this.fonts[this.nums].information.defaultOptions.fontWeight
      },
      set (value) {
        this.$store.commit('weightVmodel', {
          value: value,
          num: this.nums
        })
      }
    },
    size: {
      get () {
        return this.fonts[this.nums].information.defaultOptions.fontSize
      },
      set (value) {
        this.$store.commit('sizeVmodel', {
          value: value,
          num: this.nums
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #text-box {
    font-size: 1rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    margin-top: 1rem;
    min-height: 3rem;
  }
</style>