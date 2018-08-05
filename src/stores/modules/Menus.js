const state = {
  codeMenuOpen: false,
  optionsMenuOpen: false
}

const mutations = {
  toggleCodeMenu ({codeMenuOpen}) { codeMenuOpen = !codeMenuOpen },
  toggleOptionsMenu ({optionsMenuOpen}) { optionsMenuOpen = !optionsMenuOpen }
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
