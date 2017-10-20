// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
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

      // Font Properties
      .assert.elementPresent('#FontProperties')
      .click('#FontProperties .form-title')
      .pause(200)
      .verify.cssClassPresent(
        '#FontProperties > .form-title > span',
        'collapsed',
        'Panel is collapsed when panel title is clicked.')
      .click('#FontProperties .form-title')
      .pause(200)
      // // font-variant
      .click('#FontVariantToggle')
      .verify.cssClassNotPresent(
        '#FontVariantToggle + label',
        'disabled',
        'Font variant label lights up when toggle is activated.')
      .click('#FontVariantToggle')
      // // font-weight
      // Is this even doing anything?
      .moveToElement('#weightSlider .vue-slider-dot', 0, 0)
      .mouseButtonDown()
      .moveTo(300, 0)
      .mouseButtonUp()

      // Text Color
      .assert.elementPresent('#TextColor')
      .click('#TextColor .form-title')
      .pause(200)
      .verify.cssClassNotPresent(
        '#TextColor > .form-title > span',
        'collapsed',
        'Panel is expanded when panel title is clicked.')
      .moveToElement('#TextColorPicker .vc-saturation', 150, 50)
      .mouseButtonClick()
      // It's definitely not doing anything.
      .moveToElement('#TextColorPicker .vc-hue-picker', 0, 0)
      .mouseButtonDown()
      .moveTo(150, 0)
      .mouseButtonUp()
      // TODO: Make it do something.
      .moveToElement('#TextColorPicker .vc-alpha-picker', 0, 0)
      .mouseButtonDown()
      .moveTo(-150, 0)
      .mouseButtonUp()
      .end()
  }
}
