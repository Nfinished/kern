<template>
  <div>
    <div class="title">
    <icon :class="['caret', { open }]" icon="angle-right" size="lg" fixed-width></icon>
    <h4 v-text="component.name.replace(/-/g, ' ')" @click="open = !open"></h4>
    </div>
    <VueSlideToggle  :open="open" tag="div" :duration="150" class="form-body">
      <component :is="component" />
    </VueSlideToggle>
  </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'

export default {
  name: 'control',
  components: {
    VueSlideToggle
  },
  props: {
    component: { required: true }
  },
  data () {
    return {
      open: true
    }
  }
}
</script>

<style lang="scss">
  .title {
    border-bottom: .2rem solid #9b4dca;
    cursor: pointer;
    margin-bottom: 1rem;
    text-transform: capitalize;
    user-select: none;

    .caret {
      transition: transform .15s ease-out;

      &.open {
        transform: rotateZ(90deg);
      }
    }

    h4 {
      display: inline;
    }
  }

  .rule-name {
    font-size: 14px;
    font-style: italic;
    margin-left: 5px;
  }

  .toggle-label {
    display: inline-block;
    margin-left: 8px;
    transition: color .25s linear;
  }

  .combo-input {
    input[type='text'],
    select {
      width: 49%;
    }

    select {
      margin-left: 2%;
    }
  }

  .form-body {
    margin-bottom: 30px;
  }

  .form-group {
    margin: 15px 0;

    input[disabled="disabled"] {
      background-color: lightgray;
    }
  }

</style>
