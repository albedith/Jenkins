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

