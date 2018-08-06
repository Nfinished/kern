const state = {
  codeMenuOpen: true,
  optionsMenuOpen: true
}

const mutations = {
  toggleCodeMenu (state) { state.codeMenuOpen = !state.codeMenuOpen },
  toggleOptionsMenu (state) { state.optionsMenuOpen = !state.optionsMenuOpen }
}

const getters = {
  isCodeMenuOpen: ({codeMenuOpen}) => codeMenuOpen,
  isOptionsMenuOpen: ({optionsMenuOpen}) => optionsMenuOpen
}

export default {
  state,
  mutations,
  getters
}
