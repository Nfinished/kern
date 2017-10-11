<template>
  <div class="settings-group">
    <div class="form-title" @click="collapse">
      <span class="fa fa-lg fa-fw fa-angle-down" :class="{ collapsed: collapsed }"></span>
      <h4>Appearance</h4>
    </div>
    <div class="form-body" ref="panel">
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
      <div class="form-group">
        <label @click="colorCollapse" class="clickable toggleable"><span class="fa fa-lg fa-fw fa-angle-down" :class="{ collapsed: colorCollapsed }"></span>Text Color <span class="rule-name">(color)</span><span class="color-ref" :style="{color: renderedColor }">{{ renderedColor }}</span></label>
          <div ref="colorPanel">
            <Chrome v-model="color" />
          </div>
      </div>
      <div class="form-group">
        <label>Text Decoration <span class="rule-name">(text-decoration)</span></label>
        <div v-for="rule in textDecoration">
          <ToggleButton :value="rule.value" color="#9b4dca" :sync="true" />
          <label class="toggle-label" :class="{disabled: !rule.value}">{{ rule.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleButton from '../FormElements/ToggleButton'

import { Chrome } from 'vue-color'
import vueSlider from 'vue-slider-component'

export default {
  name: 'Appearance',
  components: {
    Chrome,
    VueSlider: vueSlider,
    ToggleButton
  },
  props: {
    rules: { type: Object, required: true }
  },
  data () {
    return {
      collapsed: false,
      colorCollapsed: true,
      color: { hex: '#000000', rgba: { r: 0, g: 0, b: 0, a: 1 } },
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
      ],
      weight: '400 (normal)',
      textDecoration: [
        { label: 'none', value: true },
        { label: 'overline', value: false },
        { label: 'line-through', value: false },
        { label: 'underline', value: false }
      ]
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
    color: {
      handler (value) {
        this.rules.color = this.renderedColor
      }
    },
    weight: {
      handler (value) {
        const input = parseInt(this.weight)
        if (input === this.weight) this.rules['font-weight'] = input
        else if (input === 700) this.rules['font-weight'] = 'bold'
        else this.rules['font-weight'] = 'normal'
      }
    }
  },
  mounted () {
    $(this.$refs.colorPanel).fadeOut(1)
  },
  methods: {
    collapse () {
      this.collapsed = !this.collapsed
      $(this.$refs.panel).slideToggle(150)
    },
    colorCollapse () {
      this.colorCollapsed = !this.colorCollapsed
      $(this.$refs.colorPanel).slideToggle(150)
    }
  }
}
</script>

<style lang="scss" scoped>

.color-ref {
  display: block;
  font-size: 1.25rem;
  margin-left: 30px;
}

.slider {
  margin-bottom: 50px;
}

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
