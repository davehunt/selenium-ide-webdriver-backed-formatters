/*
 * Base for WebDriver Backed Selenium formats
 */

this.options = {
	receiver: "selenium",
	packageName: "com.example.tests",
	driverImplementation: "FirefoxDriver()",
	indent: 'tab',
	initialIndents: '2'
};

this.configForm = 
	'<description>Variable for Selenium instance</description>' +
	'<textbox id="options_receiver" />' +
	'<description>WebDriver Implementation</description>' +
	'<menulist id="options_driverImplementation"><menupopup>' +
	'<menuitem label="HtmlUnit (JavaScript disabled)" value="HtmlUnitDriver()"/>' +
	'<menuitem label="HtmlUnit (JavaScript enabled)" value="HtmlUnitDriver(true)"/>' +
	'<menuitem label="Firefox" value="FirefoxDriver()"/>' +
	'<menuitem label="Google Chrome" value="ChromeDriver()"/>' +
	'<menuitem label="Internet Explorer" value="InternetExplorerDriver()"/>' +
	'</menupopup></menulist>';