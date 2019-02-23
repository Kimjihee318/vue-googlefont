<template>
  <div id="Test-wrapper">
    <!-- {{ isVisible }} -->
  </div>
</template>

<script>
export default {
  computed: {
    fonts (){
      return this.$store.state.fontsL
    },
    options (){
      return this.$store.state.options
    },
    isVisible (){
      let fonts = this.fonts
      let options = this.options
      //  options: [
      //    {name: 'Serif', checked: true},
      //    {name: 'Sans Serif', checked: false},
      //    {name: 'Display', checked: false},
      //  ],
      // fonts: [
      //   {name: 'Roboto', style: {'Serif': true, 'Sans Serif': false, 'Display':false}},
      //   {name: 'Robotong', style: {'Serif': false, 'Sans Serif': true, 'Display':true}},
      //   {name: 'Roboting', style: {'Serif': true, 'Sans Serif': true, 'Display':false}},
      // ],
      function isVisible(options, fonts) {
        for(let i = 0; i<options.length; i ++) {
          if(options[i].checked && fonts.style[options[i].name]) return true
        }
        return false
      }
      return fonts.map(fonts => isVisible(options,fonts))
    },
  }
}
</script>

<style>

</style>