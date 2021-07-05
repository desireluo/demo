import Vue from 'vue'
import App from './App.vue'
import router from './router'




console.log(process.env.NODE_ENV);

if('development' == process.env.NODE_ENV) {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
