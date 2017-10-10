<template>
  <pre class="info-panel" v-html="stringifiedRules"></pre>
</template>

<script>
export default {
  name: 'InfoPanel',
  props: {
    rules: { type: Object, required: true }
  },
  computed: {
    stringifiedRules () {
      let stringifiedRules = 'div {\n'
      for (const rule in this.rules) {
        stringifiedRules = stringifiedRules.concat(` ${rule}: ${this.rules[rule]};\n`)
      }
      stringifiedRules = stringifiedRules.concat('}')
      return stringifiedRules
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

.info-panel {
  border-left: 0;
  border-right: 0.3rem solid $lavender;
  font-size: .9em;
  letter-spacing: normal;
  font-family: Inconsolata, monospace;
  margin: 0;
  overflow: auto;
  padding: 24px 0 0 12px;

  &::-webkit-scrollbar-track {
    background-color: $white;
  }

  &::-webkit-scrollbar {
    background-color: #F5F5F5;
  	height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
  	background-color: $grey;
  	border: 2px solid $lavender;
  }
}
</style>
