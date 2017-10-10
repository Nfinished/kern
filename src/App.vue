<template>
  <div id="app">
    <div class="mobile">
      <div class="container">
        <div class="row">
          <div class="column">
            <h1>Oh No!</h1>
            <p>It looks like you're using a mobile device. Kern is intended for tablets and up, please check it out on a larger device!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <a href="https://www.github.com/nfinished/kern" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 250 250" fill="#fff" style="position: absolute; top: 0; right: 0">
          <path d="M0 0l115 115h15l12 27 108 108V0z" fill="#9b4dca"/>
          <path class="octo-arm" d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" style="-webkit-transform-origin: 130px 106px; transform-origin: 130px 106px"/>
          <path class="octo-body" d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"/>
        </svg>
      </a>
      <div class="row">
        <div class="column info-column">
          <InfoPanel :rules="rules" />
        </div>
        <div class="column editor-column">
          <div id="editor" :style="rules" contenteditable="true">
            Welcome to Kern! Play around with the settings on the sidebar to modify the way I look, or click on me to use your own text!
          </div>
        </div>
        <div class="column settings-column settings-dashboard">
          <Appearance :rules="rules" />
          <Spacing :rules="rules" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPanel from './components/InfoPanel'

import Appearance from './components/controls/Appearance'
import Spacing from './components/controls/Spacing'

export default {
  name: 'app',
  components: {
    InfoPanel,
    Appearance,
    Spacing
  },
  data () {
    return {
      letterSpacingType: 'normal',
      letterSpacing: '',
      lineHeightType: 'normal',
      lineHeight: '',
      rules: {
        // Appearance
        color: '#000000',
        'font-weight': 'normal',
        // Spacing
        'letter-spacing': 'normal',
        'line-height': 'normal',
        'word-spacing': 'normal'
      }
    }
  }
}
</script>

<style src='@/styles/main.scss' lang='scss'></style>
