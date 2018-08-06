const state = {
  color: {
    'hex': '#000000',
    'rgba': {
      'r': 0,
      'g': 0,
      'b': 0,
      'a': 1
    },
    'a': 1
  }
}

const mutations = {
  updateFontColor (state, value) {
    state.color = value
  }
}

const getters = {
  getFontColor: ({ color }) => {
    console.log(color)
    switch (color.a) {
      case 1:
        return color.hex === '#000000' ? null : color.hex
      default:
        const { r, g, b, a } = color.rgba
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }
  }
}

export default {
  state,
  mutations,
  getters
}
