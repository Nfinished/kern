const rulesStore = {
  store: {
    'letter-spacing': '',
    'line-height': ''
  },
  get () {
    return this.store
  },
  set (key, value) {
    this.store[key] = value
  }
}

export default rulesStore
