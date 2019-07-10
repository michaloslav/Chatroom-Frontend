<template lang="pug">
  .home
    messages-container
    message-typer
    modal-username-room(v-if="$store.state.showModalUsernameRoom")
</template>

<script>
import MessagesContainer from '../components/MessagesContainer.vue'
import MessageTyper from '../components/MessageTyper.vue'
import ModalUsernameRoom from '../components/ModalUsernameRoom.vue'

export default {
  name: 'home',
  components: {
    "messages-container": MessagesContainer,
    "message-typer": MessageTyper,
    "modal-username-room": ModalUsernameRoom,
  },
}
</script>
