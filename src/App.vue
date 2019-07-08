<template lang="pug">
  #app
    app-header
    router-view
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: "App",
  components: {
    "app-header": AppHeader,
  },
}
</script>


<style lang="sass">
  body
    font-family: 'Nanum Gothic', sans-serif
    padding-top: 4rem
  
  .row
    display: flex
    flex-wrap: wrap
    width: 100%
  
  .col
    flex-basis: 0
</style>
