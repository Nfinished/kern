<template>
  <div>
    <div class="form-group">
        <label>Size<span class="rule-name">(font-size)</span></label>
        <div class="combo-input">
          <input type="text" v-model.number="fontSizeValue" :disabled="fontSizeUnit === 'initial'">
          <select v-model="fontSizeUnit">
            <option value="initial" selected>initial</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
            <option value="px">px</option>
            <option value="%">%</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label>Variant <span class="rule-name">(font-variant)</span></label>
        <ToggleButton v-model="fontVariant" color="#9b4dca" />
        <label class="toggle-label">small-caps</label>
      </div>

      <div class="form-group slider">
        <label>Weight <span class="rule-name">(font-weight)</span></label>
        <VueSlider
        ref="weightSlider"
        v-model="fontWeight"
        :data="weightOptions"
        :min="100"
        :max="900"
        :interval="100"
        :piecewise="true"
        :process-style="{ backgroundColor: '#9b4dca'}"
        tooltip-dir="bottom"
        :tooltip-style="{ backgroundColor: '#9b4dca', borderColor: '#9b4dca' }"
        />
      </div>
  </div>
</template>

<script>
import ToggleButton from 'vue-js-toggle-button/src/Button'
import VueSlider from 'vue-slider-component'

export default {
  name: 'font-properties',
  components: {
    ToggleButton,
    VueSlider
  },
  data () {
    return {
      weightOptions: [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900
      ]
    }
  },
  computed: {
    state () {
      return this.$store.state.fontProperties
    },
    fontSizeValue: {
      get () {
        return this.state.fontSize.value
      },
      set (value) {
        this.$store.commit('updateFontSizeValue', value)
      }
    },
    fontSizeUnit: {
      get () {
        return this.state.fontSize.unit
      },
      set (value) {
        this.$store.commit('updateFontSizeUnit', value)
      }
    },
    fontVariant: {
      get () {
        return this.state.fontVariant
      },
      set (value) {
        this.$store.commit('updateFontVariant', value)
      }
    },
    fontWeight: {
      get () {
        return this.state.fontWeight
      },
      set (value) {
        this.$store.commit('updateFontWeight', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
