import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiUrl = 'http://localhost:8000/chatmessages/'

export default new Vuex.Store({
  state: {
    messages: [],
    username: localStorage.username || '',
    room: localStorage.room || '',
    showModalUsernameRoom: false,
  },
  mutations: {
    setMessages (state, messages) {
      messages.forEach(message => {
        message.time = new Date(message.time)
      })

      state.messages = messages
    },
    addMessage (state, message) {
      state.messages.push(message)
    },
    updateUsernameAndRoom (state, { username, room, hideModal }) {
      if (state.username !== username) {
        state.username = username
        localStorage.username = username
      }

      if (state.room !== room) {
        state.room = room
        localStorage.room = room
      }

      if (hideModal) state.showModalUsernameRoom = false
    },
    setShowModalUsernameRoom (state, show) {
      state.showModalUsernameRoom = show
    },
  },
  actions: {
    getMessages: async ({ commit, state }) => {
      const messagesRes = await fetch(apiUrl + '?room=' + state.room)
      const messages = await messagesRes.json()
      commit('setMessages', messages)
    },
    send: async ({ commit, state }, messageText) => {
      const message = {
        username: state.username,
        text: messageText,
        time: new Date(),
      }

      commit('addMessage', message)
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
      const resJson = await res.json()
      if (resJson.error) console.warn(resJson.error)
    },
  },
})
