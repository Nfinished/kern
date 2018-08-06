const state = {
  fontSize: {
    value: null,
    unit: 'initial'
  },
  fontVariant: false,
  fontWeight: 400
}

const mutations = {
  updateFontSizeValue (state, value) {
    state.fontSize.value = value
  },
  updateFontSizeUnit (state, value) {
    state.fontSize.unit = value
  },
  updateFontVariant (state, value) {
    state.fontVariant = value
  },
  updateFontWeight (state, value) {
    state.fontWeight = value
  }
}

const getters = {
  getFontProperties: (state, getters) => {
    const fontSize = getters.createRuleFontSize
    const fontVariant = getters.createRuleFontVariant
    const fontWeight = getters.createRuleFontWeight
    return {
      fontSize,
      fontVariant,
      fontWeight
    }
  },
  createRuleFontSize: ({ fontSize }) => {
    const { value, unit } = fontSize
    return (!value || typeof value !== 'number') || unit === 'initial' ? null : value + unit
  },
  createRuleFontVariant: ({ fontVariant }) => {
    return fontVariant ? 'small-caps' : null
  },
  createRuleFontWeight: ({ fontWeight }) => {
    switch (fontWeight) {
      case 400:
        return null
      case 700:
        return 'bold'
      default:
        return fontWeight
    }
  }
}

export default {
  state,
  mutations,
  getters
}
