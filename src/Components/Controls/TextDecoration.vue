<template>
  <Control title="Text Decoration">
    <template slot="body">
      <div class="form-group">
        <label>Text Decoration <span class="rule-name">(text-decoration)</span></label>
        <div v-for="rule in textDecoration">
          <ToggleButton :value="rule.value" @change="toggleTextDecoration(rule)" color="#9b4dca" :sync="true" />
          <label class="toggle-label" :class="{disabled: !rule.value}">{{ rule.label }}</label>
        </div>
      </div>
    </template>
  </Control>
</template>

<script>
import Control from './Control'

import ToggleButton from '../FormElements/ToggleButton'

export default {
  name: 'TextDecoration',
  components: {
    Control,
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
      ]
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
          this.ruleStore['text-decoration'] = 'none'
          this.textDecoration[0].value = true
        } else this.ruleStore['text-decoration'] = rules.join(' ')
      },
      deep: true
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

<style lang="scss" scoped>

.toggleable {
  transform: translateX(-12px)
}

.toggle-label {
  display: inline-block;
  margin-left: 8px;

  &.disabled {
    color: #ccc;
  }
}
</style>
