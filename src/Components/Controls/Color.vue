<template>
  <Control title="Color">
    <template slot="body">
      <div class="form-group">
        <label>Text Color <span class="rule-name">(color)</span><span class="color-ref" :style="{color: renderedColor }">{{ renderedColor }}</span></label>
          <div ref="colorPanel">
            <Chrome v-model="color" />
          </div>
      </div>
    </template>
  </Control>
</template>

<script>
import Control from './Control'
import { Chrome } from 'vue-color'

export default {
  name: 'Color',
  components: {
    Control,
    Chrome
  },
  store: ['ruleStore'],
  data () {
    return {
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
    color: {
      handler (value) {
        this.ruleStore.color = this.renderedColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.color-ref {
  display: block;
  font-size: 1em;
}
</style>
