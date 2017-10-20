// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueStash from 'vue-stash'
import App from './App'

import * as stores from './stores/stores'

Vue.config.productionTip = false
Vue.use(VueStash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    store: {
      ...stores
    }
  },
  template: '<App/>',
  components: { App }
})
