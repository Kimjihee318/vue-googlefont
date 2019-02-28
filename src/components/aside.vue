<template>
  <div id="aside-wrapper">
    <ul id="categories">
      <h4>Categories</h4>
      <li v-for="(items, index) in categories" :key="index" >
        <input @click="clickCheck(index)" :id="index" type="checkbox" :checked="items.checked">
        <label :for="index"><span></span></label>
        <label>{{ items.name }}</label>
      </li>
    </ul>
    <!-- <h4>Sorting</h4>
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
    <h4>Styles</h4>
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
    </ul> -->
  </div>
</template>

<script>
export default {
  computed: {
    categories (){
      return this.$store.state.asideOption.categories
    },
    sorting (){
      return this.$store.state.asideOption.sorting
    },
    language (){
      return this.$store.state.asideOption.language
    }
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
@import "../styles/components/range_mini.scss";

// 덮어쓰는 스타일의 경우 이곳에 입력합니다.
#numbeOfStyles {
  margin-top: 1rem;
}
input[type=range]::-moz-range-thumb {
  width: 0.3rem;
  height: 0.3rem;
}
select {
  border-bottom: 1px solid #ddd;
}
</style>