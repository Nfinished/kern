<template>
  <div id="app">
    <Editor />
    <Visualizer />
    <Options />
    <button style="position: absolute; top: 0; right: 500px; z-index: 100" @click="toggleCodeMenu">toggleCode</button>
    <button style="position: absolute; top: 40px; right: 500px; z-index: 100" @click="toggleOptionsMenu">toggleOptions</button>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Visualizer from './components/Visualizer'
import Options from './containers/Options'

import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Visualizer,
    Editor,
    Options
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
