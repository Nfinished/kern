<template>
  <div class="settings-group">
    <div class="form-title" @click="collapse">
      <span class="fa fa-lg fa-fw fa-angle-down" :class="{ collapsed: collapsed }"></span>
      <h4>Spacing</h4>
    </div>
    <div class="form-body" ref="panel">
      <div class="form-group">
        <label>Leading <span class="rule-name">(line-height)</span></label>
        <div class="combo-input">
          <input type="text" v-model="lineHeight.value ":class="{disabled: lineHeight.type === 'normal'}" :disabled="lineHeight.type === 'normal'">
          <select id="letterSpacingType" v-model="lineHeight.type">
            <option value="normal">normal</option>
            <option value="">multiplier</option>
            <option value="px">px (pixels)</option>
            <option value="em">em (* font size)</option>
            <option value="%">% (percent)</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Tracking <span class="rule-name">(letter-spacing)</span></label>
        <div class="combo-input">
          <input
            type="text"
            v-model="letterSpacing.value"
            :class="{ disabled: letterSpacing.type === 'normal' }"
            :disabled="letterSpacing.type === 'normal'">
          <select id="letterSpacingType" v-model="letterSpacing.type">
            <option value="normal">normal</option>
            <option value="px">px</option>
            <option value="em">em (* font size)</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Word Spacing <span class="rule-name">(word-spacing)</span></label>
        <div class="combo-input">
          <input
            type="text"
            v-model="wordSpacing.value"
            :class="{ disabled: wordSpacing.type === 'normal' }"
            :disabled="wordSpacing.type === 'normal'">
          <select id="wordSpacingType" v-model="wordSpacing.type">
            <option value="normal">normal</option>
            <option value="px">px</option>
            <option value="em">em (* font size)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Spacing',
  props: {
    rules: { type: Object, required: true }
  },
  data () {
    return {
      collapsed: false,
      lineHeight: { type: 'normal', value: '' },
      letterSpacing: { type: 'normal', value: '' },
      wordSpacing: { type: 'normal', value: '' }
    }
  },
  watch: {
    lineHeight: {
      handler (value) {
        const input = parseInt(value.value)
        if (value.type !== 'normal' && input) {
          this.rules['line-height'] = input + value.type
        } else {
          this.rules['line-height'] = 'normal'
        }
      },
      deep: true
    },
    letterSpacing: {
      handler (value) {
        const input = parseInt(value.value)
        if (value.type !== 'normal' && input) {
          this.rules['letter-spacing'] = input + value.type
        } else {
          this.rules['letter-spacing'] = 'normal'
        }
      },
      deep: true
    },
    wordSpacing: {
      handler (value) {
        const input = parseInt(value.value)
        if (value.type !== 'normal' && input) {
          this.rules['word-spacing'] = input + value.type
        } else {
          this.rules['word-spacing'] = 'normal'
        }
      },
      deep: true
    }
  },
  methods: {
    collapse () {
      this.collapsed = !this.collapsed
      $(this.$refs.panel).slideToggle(150)
    }
  }
}
</script>
