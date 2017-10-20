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
      .click('#FontVariantToggle')
      .verify.cssClassNotPresent(
        '#FontVariantToggle + label',
        'disabled',
        'Font variant label lights up when toggle is activated.')
      .click('#FontVariantToggle')
      .end()
  }
}
