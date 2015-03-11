// conf.js
// This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). 
// It will use the defaults for all other configuration. Chrome is the default browser.

// You can run the test by executing the folliwng line on your terminal:
// >protractor conf.js

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

 //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': process.env.SELENIUM_BROWSER,
    'name':'Angular Test with Protractor from Jenkins',
    'platform': process.env.SELENIUM_PLATFORM,
 	'version': process.env.SELENIUM_VERSION},

  specs: ['spec_SaucePlugin.js']
}