import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: (el, condition = true) => {
    if(condition) el.focus()
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
