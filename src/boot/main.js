import App from './App.vue'
import store from '/store/words/index.js '

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
