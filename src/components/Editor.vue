<template>
  <div class="editor" ref="editor" :style="style" contenteditable="true" spellcheck="false">
    Welcome to Kern! Play around with the settings on the sidebar to modify the way I look, or edit me to use your own text!
    <br>
    <br>
    Kern is still in development, so some things may not work the way they're intended, and others may not work at all.
    <br>
    <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus gravida diam. Cras a mi magna. Donec non ornare ipsum, at varius libero. Duis ac magna et ante feugiat eleifend at posuere elit. Morbi eu leo gravida, varius urna vel, commodo justo. Vivamus vestibulum elit id bibendum sollicitudin. Phasellus turpis sapien, imperdiet eget tellus non, iaculis convallis turpis. Nullam blandit ligula semper efficitur auctor. Cras in risus nec nunc feugiat feugiat. Suspendisse ullamcorper sodales pretium. Nam mattis ligula sed rhoncus lacinia. Cras sit amet nulla ac nibh ullamcorper iaculis a eget metus. Phasellus id tortor aliquet, semper quam non, rutrum nisl. Proin sollicitudin posuere viverra.
  </div>
</template>

<script>
export default {
  name: 'editor',
  computed: {
    style () { return this.$store.getters.editorStyles }
  }
}
</script>

<style lang="scss" scoped>
  .editor {
    height: 100%;
    padding-top: 60px;

    &:focus {
      outline: 0;
    }
  }
</style>
