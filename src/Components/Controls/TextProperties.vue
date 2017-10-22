<template>
  <Control title="Text Properties">
    <template slot="body">
      <div class="form-group">
        <label>Leading <span class="rule-name">(line-height)</span></label>
        <div class="combo-input">
          <input
            type="text"
            v-model="lineHeight"
            @input="valueChange('line-height')"
            :class="{disabled: ruleStore['line-height'].type === 'normal'}"
            :disabled="ruleStore['line-height'].type === 'normal'">
          <select id="lineHeightType" v-model="ruleStore['line-height'].type" @change="typeChange('line-height')">
            <option value="normal">normal</option>
            <option value="">multiplier</option>
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Tracking <span class="rule-name">(letter-spacing)</span></label>
        <div class="combo-input">
          <input
            type="text"
            v-model="letterSpacing"
            @input="valueChange('letter-spacing')"
            :class="{disabled: ruleStore['letter-spacing'].type === 'normal'}"
            :disabled="ruleStore['letter-spacing'].type === 'normal'">
          <select id="letterSpacingType" v-model="ruleStore['letter-spacing'].type" @change="typeChange('letter-spacing')">
            <option value="normal">normal</option>
            <option value="px">px</option>
            <option value="em">em</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Word Spacing <span class="rule-name">(word-spacing)</span></label>
        <div class="combo-input">
          <input
            type="text"
            v-model="wordSpacing"
            @input="valueChange('word-spacing')"
            :class="{disabled: ruleStore['word-spacing'].type === 'normal'}"
            :disabled="ruleStore['word-spacing'].type === 'normal'">
          <select id="wordSpacingType" v-model="ruleStore['word-spacing'].type" @change="typeChange('word-spacing')">
            <option value="normal">normal</option>
            <option value="px">px</option>
            <option value="em">em</option>
          </select>
        </div>
      </div>
    </template>
  </Control>
</template>

<script>
import Control from './Control'

export default {
  name: 'TextProperties',
  components: {
    Control
  },
  store: ['ruleStore'],
  data () {
    return {
      lineHeight: '',
      letterSpacing: '',
      wordSpacing: ''
    }
  },
  methods: {
    valueChange (type) {
      switch (type) {
        case 'line-height':
          this.ruleStore[type].value = this.lineHeight
          break
        case 'letter-spacing':
          this.ruleStore[type].value = this.letterSpacing
          break
        case 'word-spacing':
          this.ruleStore[type].value = this.wordSpacing
          break
        default:
          break
      }
    },
    typeChange (type) {
      if (this.ruleStore[type].type === 'normal') {
        this.ruleStore[type].value = ''
        return false
      } else {
        switch (type) {
          case 'line-height':
            this.ruleStore[type].value = this.lineHeight
            break
          case 'letter-spacing':
            this.ruleStore[type].value = this.letterSpacing
            break
          case 'word-spacing':
            this.ruleStore[type].value = this.wordSpacing
            break
          default:
            break
        }
      }
    }
  }
}
</script>
