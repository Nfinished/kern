import Vue from 'vue'
import Vuex from 'vuex'

import Menus from './modules/Menus'

import fontProperties from './modules/FontProperties'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    editorStyles: (state, getters) => {
      return {
        ...getters.getFontProperties
      }
    }
  },
  modules: {
    Menus,
    fontProperties
  }
})
