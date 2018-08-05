const state = {
  fontSize: {
    value: null,
    unit: 'normal'
  },
  fontVariant: null,
  fontWeight: 400
}

const getters = {
  getFontProperties: ({ fontVariant }, getters) => {
    const fontSize = getters.createRuleFontSize
    const fontWeight = getters.createRuleFontWeight
    return {
      fontSize,
      fontVariant,
      fontWeight
    }
  },
  createRuleFontSize: ({ fontSize }) => {
    console.log(fontSize)
    const { value, unit } = fontSize
    return !value || unit === 'normal' ? null : value + unit
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
  getters
}
