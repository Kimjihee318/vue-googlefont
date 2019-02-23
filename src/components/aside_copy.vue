<template>
  <div id="aside-wrapper">
    <ul id="categories">
      <h4>Categories</h4>
      <li v-for="(items, index) in checks" :key="index" >
        <input @click="clickCheck(index)" :id="index" type="checkbox" :checked="items.checked">
        <label :for="index"><span></span></label>
        <label>{{ items.name }}</label>
      </li>
    </ul>
    <h4>Sorting</h4>
    <span>
      <select id="sorting">
        <option v-for="(item, index) in sorting" :key="index" :value="item">{{ item }}</option>
      </select>
    </span>
    <h4>Language</h4>
    <span>
      <select id="language">
        <option v-for="(item, index) in language" :key="index" :value="item">{{ item }}</option>
      </select>
    </span>
    <ul id="numbeOfStyles">
      <li>
        <label for="">Number of stlyes</label>
        <br>
        <input type="range" min="0" max="5">
      </li>
      <li>
        <label for="">Thickness</label>
        <br>
        <input type="range" min="0" max="5">
      </li>
      <li>
        <label for="">Slant</label>
        <br>
        <input type="range" min="0" max="5">
      </li>
      <li>
        <label for="">Width</label>
        <br>
        <input type="range" min="0" max="5">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters ,mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      asideState: state => state.aside,
      checks: state => state.aside.asideOption.categories,
      sorting: state => state.aside.asideOptoin.sorting,
      language: state => state.aside.asideOptoin.language
    })
  },
  methods: {
    clickCheck (index){
      this.$store.commit('clickCheck', index);
    }
  } 
}
</script>

<style lang="scss" scoped>
@import "../styles/setup/normalize.scss";
@import "../styles/setup/variables.scss";
@import "../styles/basics/aside.scss";
@import "../styles/components/checkBox.scss";
@import "../styles/components/selectBox.scss";
@import "../styles/components/range.scss";

#numbeOfStyles {
  margin-top: 1rem;
}
input[type=range]::-moz-range-thumb {
  width: 0.5rem;
  height: 0.5rem;
}
select {
  border-bottom: 1px solid #ddd;
}
</style>