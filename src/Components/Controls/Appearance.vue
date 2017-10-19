<template>
  <Control title="Appearance">
    <template slot="body">
      <div class="form-group slider">
        <label>Weight <span class="rule-name">(font-weight)</span></label>
        <VueSlider
        ref="weightSlider"
        v-model="weight"
        :data="weightOptions"
        :min="100"
        :max="900"
        :interval="100"
        :piecewise="true"
        :process-style="{ 'background-color': '#9b4dca'}"
        tooltip-dir="bottom"
        :tooltip-style="{ 'background-color': '#9b4dca', 'border-color': '#9b4dca' }"
        />
      </div>
    </template>
  </Control>
</template>

<script>
import Control from './Control'

import vueSlider from 'vue-slider-component'

export default {
  name: 'Appearance',
  store: ['ruleStore'],
  components: {
    VueSlider: vueSlider,
    Control
  },
  data () {
    return {
      collapsed: false,
      colorCollapsed: true,
      weight: '400 (normal)',
      weightOptions: [
        100,
        200,
        300,
        '400 (normal)',
        500,
        600,
        '700 (bold)',
        800,
        900
      ]
    }
  },
  watch: {
    weight: {
      handler (value) {
        const input = parseInt(this.weight)
        if (input === this.weight) this.ruleStore['font-weight'] = input
        else if (input === 700) this.ruleStore['font-weight'] = 'bold'
        else this.ruleStore['font-weight'] = 'normal'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.slider {
  margin-bottom: 50px;
}

</style>
