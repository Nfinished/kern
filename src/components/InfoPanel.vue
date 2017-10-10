<template>
  <pre class="info-panel">
    div {
      <template v-for="value, key in rules">
        {{ key }}: {{ value }};
      </template>
    }
  </pre>
</template>

<script>
export default {
  name: 'InfoPanel',
  props: {
    rules: { type: Object, required: true }
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
  line-height: .9em;
  font-family: Inconsolata, monospace;
  margin: 0;
  overflow: scroll;
  padding: 24px 0;

  &::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  &::-webkit-scrollbar {
    background-color: #F5F5F5;
  	height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
  	background-color: $grey;
  	border: 2px solid #555555;
  }
}
</style>
