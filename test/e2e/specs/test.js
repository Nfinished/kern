// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Component Tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#gitlink')
      .assert.containsText('#editor', 'Welcome to Kern!')
      .assert.containsText('.info-panel', 'div')

      // Panel toggles
      .assert.elementPresent('#FontProperties')
      .click('#FontProperties .form-title')
      .pause(200)
      .verify.cssClassPresent(
        '#FontProperties > .form-title > span',
        'collapsed',
        'Panel is collapsed when panel title is clicked.')
        .pause(200)
        .click('#FontProperties .form-title')
        .verify.cssClassNotPresent(
          '#FontProperties > .form-title > span',
          'collapsed',
          'Panel is expanded when panel title is clicked again.')
      .pause(200)

      // // vue toggle buttons
      .click('#FontVariantToggle')
      .verify.cssClassNotPresent(
        '#FontVariantToggle + label',
        'disabled',
        'Font variant label lights up when toggle is activated.')
      .click('#FontVariantToggle')

      // vue sliders
      .moveToElement('#weightSlider .vue-slider-dot', 0, 0)
      .mouseButtonDown()
      .moveTo(300, 0)
      .mouseButtonUp()

      // color picker
      .assert.elementPresent('#TextColor')
      .click('#TextColor .form-title')
      .pause(200)
      .moveToElement('#TextColorPicker .vc-saturation', 150, 50)
      .mouseButtonClick()
      // TODO: Figure out why the below test doesn't look like it does anything, but passes anyway.
      .moveToElement('#TextColorPicker .vc-hue-picker', 0, 0)
      .mouseButtonDown()
      .moveTo(150, 0)
      .mouseButtonUp()
      .moveToElement('#TextColorPicker .vc-alpha-picker', 0, 0)
      .mouseButtonDown()
      .moveTo(-150, 0)
      .mouseButtonUp()
      .end()
  }
}
