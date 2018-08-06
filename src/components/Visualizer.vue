<template>
  <pre class="visualizer">
  div {

    <template v-for="rule in rules">{{ rule.name }}: {{ rule.value }};</template><template v-if="!rules.length">/* Modify some rules
    to get started! */</template>

  }
  </pre>
</template>

<script>

export default {
  name: 'visualizer',
  computed: {
    rules () {
      let rules = this.$store.getters.editorStyles
      rules = Object.entries(rules).map(s => {
        return { name: this.stringifyProperty(s[0]), value: s[1] }
      }).filter(({ value }) => value)
      return rules
    }
  },
  methods: {
    stringifyProperty (property) {
      return property.replace(/([A-Z])/g, '-$1').trim().toLowerCase()
    }
  }

}
</script>

<style lang="scss" scoped>
.visualizer {
  border-left: 0;
  height: 100%;
  font-size: .8em;
  left: 0;
  letter-spacing: 0px;
  margin: 0;
  padding: 60px 1.5em 0;
  position: absolute;
  top: 0;
  width: 200px;
}
</style>
