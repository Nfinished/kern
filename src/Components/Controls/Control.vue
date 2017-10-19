<template>
  <div class="settings-group">
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
    hideOnLoad: { required: false, type: Boolean, default: false }
  },
  data () {
    return {
      collapsed: false
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
</style>
