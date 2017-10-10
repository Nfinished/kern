<template>
  <div class="settings-group">
    <div class="form-title" @click="collapse">
      <span class="fa fa-lg fa-fw fa-angle-down" :class="{ collapsed: collapsed }"></span>
      <h4>Decoration</h4>
    </div>
    <div class="form-body" ref="panel">
      <div class="form-group">
        <label @click="colorCollapse"><span class="fa fa-lg fa-fw fa-angle-down" :class="{ collapsed: colorCollapsed }"></span>Text Color <span class="rule-name">(color)</span><span class="color-ref" :style="{color: renderedColor }">{{ renderedColor }}</span></label>
          <div ref="colorPanel">
            <Chrome v-model="color" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'Decoration',
  components: {
    Chrome
  },
  props: {
    rules: { type: Object, required: true }
  },
  data () {
    return {
      collapsed: false,
      colorCollapsed: false,
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
        this.rules.color = this.renderedColor
      }
    }
  },
  mounted () {
    $(this.$refs.colorRef).fadeOut(1)
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
  font-size: 1.25rem;
  margin-left: 15px;
}
</style>
