<template>
  <Control title="Text Decoration">
    <template slot="body">
      <div class="form-group">
        <label>Line <span class="rule-name">(text-decoration-line)</span></label>
        <div v-for="rule in textDecoration">
          <ToggleButton :value="rule.value" @change="toggleTextDecoration(rule)" color="#9b4dca" :sync="true" />
          <label class="toggle-label" :class="{disabled: !rule.value}">{{ rule.label }}</label>
        </div>
      </div>
      <div class="form-group">
        <label>Line Style<span class="rule-name">(text-decoration-style)</span></label>
          <select id="textDecorationStyle" v-model="ruleStore['text-decoration-style']">
            <option value="solid">Solid</option>
            <option value="double">Double</option>
            <option value="dotted">Dotted</option>
            <option value="dashed">Dashed</option>
            <option value="wavy">Wavy</option>
          </select>
      </div>
      <div class="form-group">
        <label>Line Color <span class="rule-name">(text-decoration-color)</span><span class="color-ref" :style="{color: renderedColor }">{{ renderedColor }}</span></label>
          <div ref="colorPanel">
            <Chrome v-model="color" />
          </div>
      </div>
    </template>
  </Control>
</template>

<script>
import Control from './Control'

import ToggleButton from '../FormElements/ToggleButton'
import { Chrome } from 'vue-color'

export default {
  name: 'TextDecoration',
  components: {
    Control,
    Chrome,
    ToggleButton
  },
  store: ['ruleStore'],
  data () {
    return {
      textDecoration: [
        { label: 'none', value: true },
        { label: 'overline', value: false },
        { label: 'line-through', value: false },
        { label: 'underline', value: false }
      ],
      color: { hex: '#000000', rgba: { r: 0, g: 0, b: 0, a: 1 } }
    }
  },
  computed: {
    renderedColor () {
      const hasAlphaChannel = this.color.rgba.a < 1
      if (hasAlphaChannel) return `rgba(${this.color.rgba.r}, ${this.color.rgba.g}, ${this.color.rgba.b}, ${this.color.rgba.a})`
      else return this.color.hex
    }
  },
  watch: {
    textDecoration: {
      handler (value) {
        let rules = []
        this.textDecoration.forEach(rule => {
          if (rule.value) rules.push(rule.label)
        })
        if (!rules.length || rules.includes('none')) {
          this.ruleStore['text-decoration-line'] = 'none'
          this.textDecoration[0].value = true
        } else this.ruleStore['text-decoration-line'] = rules.join(' ')
      },
      deep: true
    },
    color: {
      handler (value) {
        this.ruleStore['text-decoration-color'] = this.renderedColor
      }
    }
  },
  methods: {
    toggleTextDecoration (rule) {
      rule.value = !rule.value
      switch (rule.label) {
        case 'none':
          if (rule.value) this.textDecoration.slice(1).forEach(_ => { _.value = false })
          break
        default:
          if (rule.value) this.textDecoration[0].value = false
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
