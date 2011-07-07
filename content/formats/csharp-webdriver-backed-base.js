/*
 * Base for C# WebDriver Backed Selenium formats
 */

this.options = {
    receiver: "selenium",
	driver_namespace: "OpenQA.Selenium.Firefox",
	driver_implementation: "FirefoxDriver()",
	test_namespace: "SeleniumTests",
    indent:	'tab',
    initialIndents:	'3'
};

this.configForm =
    	'<description>Test Namespace</description>' +
    	'<textbox id="options_test_namespace" />' +
		'<description>Variable for Selenium instance name</description>' +
    	'<textbox id="options_receiver" />' +
		'<description>WebDriver Namespace</description>' +
		'<menulist id="options_driver_namespace"><menupopup>' +
		'<menuitem label="OpenQA.Selenium.Firefox" value="OpenQA.Selenium.Firefox"/>' +
		'<menuitem label="OpenQA.Selenium.Chrome" value="OpenQA.Selenium.Chrome"/>' +
		'<menuitem label="OpenQA.Selenium.IE" value="OpenQA.Selenium.IE"/>' +
		'</menupopup></menulist>' +
		'<description>WebDriver Implementation</description>' +
		'<menulist id="options_driver_implementation"><menupopup>' +
		'<menuitem label="Firefox" value="FirefoxDriver()"/>' +
		'<menuitem label="Google Chrome" value="ChromeDriver()"/>' +
		'<menuitem label="Internet Explorer" value="InternetExplorerDriver()"/>' +
		'</menupopup></menulist>'; 