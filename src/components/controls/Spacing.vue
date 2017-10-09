<template>
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
</template>

<script>
import rulesStore from './stores/rulesStore'

export default {
  name: 'Spacing',
  data () {
    return {
      rulesStore: rulesStore.get()
    }
  },
  computed: {
    rules () {
      return this.rulesStore.store
    },
    style () {
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
