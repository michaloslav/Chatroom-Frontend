<template lang="pug">
  header
    router-link.brand(to="/" tag="span") Chatroom
    .floatRight
      div.usernameAndRoom(
        v-if="showUsernameAndRoom"
        @click="openModal"
      )
        span.username {{$store.state.username}}
        span.separator  | 
        span.room {{$store.state.room}}
      router-link.settings.fas.fa-cog(to="/settings" tag="i")
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    showUsernameAndRoom(){
      return this.$store.state.username !== ""
    },
  },
  methods: {
    openModal(){
      this.$store.commit("setShowModalUsernameRoom", true)
    },
  },
}
</script>

<style lang="sass">
  header
    position: fixed
    top: 0
    left: 0
    width: calc(100vw - 2rem)
    background: linear-gradient(45deg, #9554ffd4, #9e62ffc7)
    padding: 1rem

    .brand, .settings
      font-size: 1.5rem
      font-weight: 700

      &:hover
        cursor: pointer

    .floatRight
      float: right

      .usernameAndRoom
        display: inline
        cursor: pointer

        @media screen and (max-width: 375px)
          .username, .separator
            display: none


      .settings
        margin: 0 1rem
</style>
