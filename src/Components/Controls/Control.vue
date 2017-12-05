<template>
  <div class="settings-group" :id="id">
    <div class="form-title" @click="collapse">
      <span class="fa fa-lg fa-fw fa-angle-down" :class="{ collapsed: collapsed }"></span>
      <h4>{{ title }}</h4>
    </div>
    <div class="form-body" ref="panel">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Control',
  props: {
    title: { required: true, type: String },
    hideOnLoad: { required: false, type: Boolean, default: true }
  },
  data () {
    return {
      collapsed: false,
      id: this.title.replace(/\s/g, '')
    }
  },
  mounted () {
    if (this.hideOnLoad) {
      this.collapsed = true
      $(this.$refs.panel).hide(1)
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

<style lang="scss" scoped>
h4 {
  text-transform: capitalize;
}

// Slider styles
.slider {
  margin-bottom: 50px;
}

// Toggle styles
.toggleable {
  transform: translateX(-12px)
}

.toggle-label {
  display: inline-block;
  margin-left: 8px;
  transition: color .25s linear;

  &.disabled {
    color: #ccc;
  }
}

// Colorpicker styles
.color-ref {
  display: block;
  font-size: 1em;
}
</style>
