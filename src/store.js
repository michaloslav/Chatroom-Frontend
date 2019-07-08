import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiUrl = "http://localhost:8000/chatmessages/"

export default new Vuex.Store({
  state: {
    messages: [],
    username: "",
    room: "",
    showModalUsernameRoom: true,
  },
  mutations: {
    setMessages(state, messages){
      state.messages = messages
    },
    addMessage(state, message){
      state.messages.push(message)
    },
    updateUsernameAndRoom(state, {username, room, hideModal}){
      state.username = username
      state.room = room
      if(hideModal) state.showModalUsernameRoom = false
    },
    setShowModalUsernameRoom(state, show){
      state.showModalUsernameRoom = show
    },
  },
  actions: {
    getMessages: async ({commit, state}) => {
      const messagesRes = await fetch(apiUrl + "?room=" + state.room)
      const messages = await messagesRes.json()
      commit("setMessages", messages)
    },
    send: async ({commit, state}, messageText) => {
      const message = {
        username: state.username,
        text: messageText
      }

      commit("addMessage", message)
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
      const resJson = await res.json()
      if(resJson.error) console.warn(resJson.error)
    }
  }
})
