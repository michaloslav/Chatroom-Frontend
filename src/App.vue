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
  beforeCreate(){
    if(
      localStorage.username && 
      localStorage.username !== "" && 
      localStorage.room && 
      localStorage.room !== ""
    ) this.$store.dispatch("getMessages")

    else this.$store.commit("setShowModalUsernameRoom", true)
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
