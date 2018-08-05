<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    Editor
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
