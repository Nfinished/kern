import Vue from 'vue'
import Vuex from 'vuex'

import Menus from './modules/Menus'

import fontProperties from './modules/FontProperties'
import fontColor from './modules/FontColor'

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
      const color = getters.getFontColor
      return {
        ...getters.getFontProperties,
        color
      }
    }
  },
  modules: {
    Menus,
    fontProperties,
    fontColor
  }
})
