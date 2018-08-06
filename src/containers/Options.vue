<template>
  <div class="options">
    <Control v-for="component in Controls" :key="component.name" :component="component" />
  </div>
</template>

<script>
import Control from '../components/Control'
import * as Controls from '../components/options'

export default {
  name: 'options',
  components: {
    Control
  },
  data () {
    return {
      Controls
    }
  }
}
</script>

<style lang="scss" scoped>
  .options {
    height: 100%;
    right: 0;
    padding: 60px 10px 0;
    position: absolute;
    top: 0;
    width: 300px;
  }
</style>
