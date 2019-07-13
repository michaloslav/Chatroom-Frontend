<template lang="pug">
  .MessageTyper
    input(
      v-model="message"
      @keyup.enter="send"
      v-focus="!$store.state.showModalUsernameRoom"
    )
    button(@click="send")
      i.fas.fa-paper-plane
</template>

<script>
export default {
  name: "MessageTyper",
  data: () => ({
    message: ""
  }),
  methods: {
    send(){
      if(this.message.length){
        this.$store.dispatch("send", this.message)
      }
    }
  }
}
</script>

<style lang="sass">
  .MessageTyper
    padding: .5rem

    input
      width: calc(100% - 3.5rem)
      padding: .25rem
    
    button
      background-color: white
      border: none
      position: relative
      top: .25rem
      padding: .5rem

      i
        float: right
        font-size: 1.25rem
        color: #0099ff
</style>
