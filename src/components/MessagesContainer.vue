<template lang="pug">
  .MessagesContainer
    message-display(v-for="message of $store.state.messages" :message="message")

</template>

<script>
import MessageDisplay from './MessageDisplay.vue'

export default {
  name: "MessagesContainer",
  components: {
    "message-display": MessageDisplay
  },
}
</script>

<style lang="sass">
  .MessagesContainer
    border: solid 1px #d2d2d2
    border-radius: 1rem
    height: calc(100vh - 10rem)
    box-shadow: 2px -7px 14px #d2d2d2e0
    overflow: auto
    padding: .5rem
</style>
