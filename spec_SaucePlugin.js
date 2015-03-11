// In order to run a end to end (e2e) test using protractor you need the following:
// 1. AngularJS application
// 2. A test also known as "spec"
// 3. configuration file

// The test or spec is a Jasmine test developed with the Jasmine framework. 

// The first thing that a Jasmine test requieres is a call to the Jasmine function "describe" with two parameters: a string and a 
// function. The string is the name of the test in this case "angularjs homepage" and the function is a block of code that implements the test or
// spec. The function for the spec or test has to have a call to the Jasmine function "it" which also takes a string and a function. The string
// is a title for this specific test and the function is the actual test or spec. The Jasmine test ends with a expect which is a call to the 
// function expect in which the actual value is verified against a matcher function.

// browser is a global created by Protractor, which is used for browser-level commands such as navigation with browser.get

// Sauce OnDemand Plugin
// When you select the platforms/browser in the plugin the plugin will set those values to a series of environment variables.
// You need to point your desired capabilities to these enviroment variables. Be careful, some of them can't be properly set by the plugin, so you will have to set it yourself.

// SELENIUM_HOST - The hostname of the Selenium server
// SELENIUM_PORT - The port of the Selenium server
// SELENIUM_PLATFORM - The operating system of the selected browser
// SELENIUM_VERSION - The version number of the selected browser
// SELENIUM_BROWSER - The browser name of the selected browser.
// SELENIUM_DEVICE - The device name of the selected browser (only available for mobile browsers)
// SELENIUM_DEVICE_TYPE - The device type of the selected browser (only available for Appium browsers)
// SELENIUM_DRIVER - Contains the operating system, version and browser name of the selected browser, in a format designed for use by the Selenium Client Factory
// SAUCE_ONDEMAND_BROWSERS - A JSON-formatted string representing the selected browsers
// SELENIUM_URL - The initial URL to load when the test begins
// SAUCE_USER_NAME - The user name used to invoke Sauce OnDemand
// SAUCE_API_KEY - The access key for the user used to invoke Sauce OnDemand
// SELENIUM_STARTING_URL - The value of the Starting URL field

//Retreiving enviroment variables from Jenkins Plugin
  {console.log("SELENIUM_HOST:", process.env.SELENIUM_HOST)};
  {console.log("SELENIUM_PORT:", process.env.SELENIUM_PORT)};
  {console.log("SELENIUM_PLATFORM:", process.env.SELENIUM_PLATFORM)};
  {console.log("SELENIUM_VERSION:", process.env.SELENIUM_VERSION)};
  {console.log("SELENIUM_BROWSER:", process.env.SELENIUM_BROWSER)};
  {console.log("SELENIUM_DEVICE:", process.env.SELENIUM_DEVICE)};
  {console.log("SELENIUM_DEVICE_TYPE:", process.env.SELENIUM_DEVICE_TYPE)};
  {console.log("SELENIUM_DRIVER:", process.env.SELENIUM_DRIVER)};
  {console.log("SAUCE_ONDEMAND_BROWSERS:", process.env.SAUCE_ONDEMAND_BROWSERS)};
  {console.log("SELENIUM_URL:", process.env.SELENIUM_URL)};
  {console.log("SAUCE_USER_NAME:", process.env.SAUCE_USER_NAME)};
  {console.log("SAUCE_API_KEY:", process.env.SAUCE_API_KEY)};
  {console.log("SAUCE_STARTING_URL:", process.env.SELENIUM_STARTING_URL)};

describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('https://angularjs.org/');
	expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
  });
});

