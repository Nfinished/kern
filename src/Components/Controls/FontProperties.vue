<template>
  <Control title="Font Properties" :hideOnLoad="false">
    <template slot="body">
      <!-- <div class="form-group">
        <label>Font Stretch<span class="rule-name">(font-stretch)</span></label>
        <select id="fontStretch" v-model="ruleStore['font-stretch']">
          <option value="ultra-condensed">ultra-condensed</option>
          <option value="extra-condensed">extra-condensed</option>
          <option value="condensed">condensed</option>
          <option value="semi-condensed">semi-condensed</option>
          <option value="normal">normal</option>
          <option value="semi-expanded">semi-expanded</option>
          <option value="expanded">expanded</option>
          <option value="extra-expanded">extra-expanded</option>
          <option value="ultra-expanded">ultra-condensed</option>
        </select>
      </div> -->
      <div class="form-group">
        <label>Variant <span class="rule-name">(font-variant)</span></label>
        <ToggleButton id="FontVariantToggle" @change="ruleStore['font-variant'] = ruleStore['font-variant'] === 'normal' ? 'small-caps' : 'normal'" color="#9b4dca" />
        <label class="toggle-label" :class="{disabled: ruleStore['font-variant'] === 'normal'}">small-caps</label>
      </div>
      <div class="form-group slider" id="weightSlider">
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

import ToggleButton from '../FormElements/ToggleButton'
import vueSlider from 'vue-slider-component'

export default {
  name: 'FontProperties',
  store: ['ruleStore'],
  components: {
    Control,
    ToggleButton,
    VueSlider: vueSlider
  },
  data () {
    return {
      collapsed: false,
      colorCollapsed: true,
      checked: true,
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
