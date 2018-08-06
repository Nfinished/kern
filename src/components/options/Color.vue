<template>
  <div class="form-group">
    <label>Font Color<span class="rule-name">(color)</span></label>
  <ColorPicker v-model="color" />
  </div>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color'

export default {
  name: 'color',
  components: {
    ColorPicker
  },
  computed: {
    color: {
      get () {
        return this.$store.state.fontColor.color
      },
      set (value) {
        this.$store.commit('updateFontColor', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
