<template lang="pug">
  base-modal.ModalUsernameRoom(@close="close")
    table
      tbody
        tr
          td
            label(for="usernameInput") Username:
          td
            input#usernameInput(v-model="username" v-focus @keyup.enter="focusOnRoom")
        tr
          td
            label(for="roomInput") Room:
          td
            input#roomInput(v-model="room" ref="room" @keyup.enter="submit")
        tr
          td(colspan="2")
            button(@click="submit") Go!
</template>

<script>
import BaseModal from './BaseModal.vue'

export default {
  name: "ModalUsernameRoom",
  data(){
    let {username, room} = this.$store.state
    return {username, room}
  },
  methods: {
    focusOnRoom(){
      if(this.username !== "") this.$refs.room.focus()
    },
    submit(){
      let {username, room} = this
      if(username === "" || room === "") return
      this.$store.commit("updateUsernameAndRoom", {username, room, hideModal: true})
      this.$store.dispatch("getMessages")
    },
    close(){
      let {username, room} = this.$store.state
      if(username === "" || room === "") return
      this.$store.commit("setShowModalUsernameRoom", false)
    }
  },
  components: {
    "base-modal": BaseModal
  },
}
</script>

<style lang="sass">
  .ModalUsernameRoom
    display: flex
    align-items: center

    table
      width: 100%
      text-align: center

      td
        padding: .5rem
  
    input
      border: solid 1px #bbbbbb
      box-shadow: none
      padding: .25rem
      border-radius: 2px

      &:focus
        outline-offset: 0
        outline: 0
    
    button
      border: solid #a39dd6 2px
      border-radius: .5rem
      padding: .25rem .5rem
      background-color: white
    
</style>
