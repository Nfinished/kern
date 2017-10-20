import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('should act as a router for app components', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#gitlink').href)
      .to.equal('https://www.github.com/nfinished/kern')
  })
})
