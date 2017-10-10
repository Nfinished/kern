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
      <div class="row">
        <div class="column column-20">
          <InfoPanel :rules="rules" />
        </div>
        <div class="column column-55">
          <div id="editor" :style="rules" contenteditable="true">
            Welcome to Kern! Play around with the settings on the sidebar to modify the way I look, or click on me to use your own text!
          </div>
        </div>
        <div class="column column-25 settings-dashboard">
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
        'letter-spacing': 'normal',
        'line-height': 'normal',
        'word-spacing': 'normal',
        color: '#000000',
        'font-weight': 'normal'
      }
    }
  }
}
</script>

<style src='@/styles/main.scss' lang='scss'></style>
