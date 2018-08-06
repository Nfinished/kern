import Vue from 'vue'
import App from './App.vue'
import store from './stores'

import 'normalize.css'
import 'milligram'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleRight)

Vue.component('icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
