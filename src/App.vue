<template>
  <div id="app">
    <Editor />
    <Visualizer />
    <button style="position: absolute; top: 0; right: 0; z-index: 2" @click="toggleCodeMenu">toggleCode</button>
    <button style="position: absolute; top: 40px; right: 0; z-index: 2" @click="toggleOptionsMenu">toggleOptions</button>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Visualizer from './components/Visualizer'

import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Editor,
    Visualizer
  },
  methods: mapMutations(['toggleCodeMenu', 'toggleOptionsMenu'])
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
  background-color: lightgrey;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
