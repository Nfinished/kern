<template>
  <div id="app">
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
          <div class="settings-group">
            <div class="form-title">
              <span class="fa fa-lg fa-fw fa-angle-right"></span>
              <h4>Spacing Rules</h4>
            </div>
            <div class="form-body">
              <div class="form-group">
                <label for="kerning">Kerning <span class="rule-name">(letter-spacing)</span></label>
                <div class="combo-input">
                  <input type="text" v-model="letterSpacing" :class="{disabled: letterSpacingType === 'normal'}" :disabled="letterSpacingType === 'normal'">
                  <select id="letterSpacingType" v-model="letterSpacingType">
                    <option value="normal">normal</option>
                    <option value="px">px</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="lineHeight">Line Height <span class="rule-name">(line-height)</span></label>
                <div class="combo-input">
                  <input type="text" v-model="lineHeight" :class="{disabled: lineHeightType === 'normal'}" :disabled="lineHeightType === 'normal'">
                  <select id="letterSpacingType" v-model="lineHeightType">
                    <option value="normal">normal</option>
                    <option value="multiplier">multiplier</option>
                    <option value="px">px</option>
                    <option value="percent">%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPanel from './components/InfoPanel'
import rulesStore from './stores/rulesStore'

export default {
  name: 'app',
  components: {
    InfoPanel
  },
  data () {
    return {
      rulesStore: rulesStore.get(),
      letterSpacingType: 'normal',
      letterSpacing: '',
      lineHeightType: 'normal',
      lineHeight: ''
    }
  },
  computed: {
    rules () {
      // Letter Spacing
      let computedLetterSpacing = this.letterSpacingType === 'normal' ? 'normal' : this.letterSpacing ? `${this.letterSpacing}px` : 'normal'

      // Line Height
      let computedLineHeight
      if (!this.lineHeight || this.lineHeightType === 'normal') computedLineHeight = 'normal'
      else {
        switch (this.lineHeightType) {
          case 'multiplier':
            computedLineHeight = this.lineHeight
            break
          case 'px':
            computedLineHeight = `${this.lineHeight}px`
            break
          case 'percent':
            computedLineHeight = `${this.lineHeight}%`
            break
        }
      }
      return {
        'letter-spacing': computedLetterSpacing,
        'line-height': computedLineHeight
      }
    }
  }
}
</script>

<style src='@/styles/main.scss' lang='scss'></style>
