/*
 * Format for Selenium WebDriver Backed .NET (C#) client (NUnit)
 */

load('chrome://webdriver-backed-formatters/content/formats/csharp-base.js');
load('chrome://webdriver-backed-formatters/content/formats/csharp-webdriver-backed-base.js');

this.name = "csharp-nunit-webdriver-backed";

function testMethodName(testName) {
	return "The" + capitalize(testName) + "Test";
}

NotEquals.prototype.assert = function() {
	return "Assert.AreNotEqual(" + this.e1.toString() + ", " + this.e2.toString() + ");";
};

function assertTrue(expression) {
	return "Assert.IsTrue(" + expression.toString() + ");";
}

function assertFalse(expression) {
	return "Assert.IsFalse(" + expression.toString() + ");";
}

this.options.header = 
    	'using System;\n' +
    	'using System.Text;\n' +
    	'using System.Text.RegularExpressions;\n' +
    	'using System.Threading;\n' +
    	'using NUnit.Framework;\n' +
    	'using OpenQA.Selenium;\n' +
		'using ${driver_namespace};\n' +
		'using Selenium;\n' +
    	'\n' +
    	'namespace ${test_namespace}\n' +
    	'{\n' +
    	indents(1) + '[TestFixture]\n' +
    	indents(1) + 'public class ${className}\n' +
    	indents(1) + '{\n' +
    	indents(2) + 'private IWebDriver driver;\n' + 
		indents(2) + 'private ISelenium ${receiver};\n' +
    	indents(2) + 'private StringBuilder verificationErrors;\n' +
    	indents(2) + '\n' +
    	indents(2) + '[SetUp]\n' +
    	indents(2) + 'public void SetupTest()\n' +
    	indents(2) + '{\n' +
		indents(3) + 'verificationErrors = new StringBuilder();\n' +
    	indents(3) + 'driver = new ${driver_implementation};\n' +
		indents(3) + '${receiver} = new WebDriverBackedSelenium(driver,  "${baseURL}");\n' +
		indents(3) + '${receiver}.Start();\n' +
    	indents(2) + '}\n' +
    	indents(2) + '\n' +
    	indents(2) + '[TearDown]\n' +
    	indents(2) + 'public void TeardownTest()\n' +
    	indents(2) + '{\n' +
    	indents(3) + 'try\n' +
    	indents(3) + '{\n' +
    	indents(4) + 'driver.Close();\n' +
    	indents(3) + '}\n' +
    	indents(3) + 'catch (Exception)\n' +
    	indents(3) + '{\n' +
    	indents(4) + '// Ignore errors if unable to close the browser\n' +
    	indents(3) + '}\n' +
    	indents(3) + 'Assert.AreEqual(string.Empty, verificationErrors.ToString());\n' +
    	indents(2) + '}\n' +
    	indents(2) + '\n' +
    	indents(2) + '[Test]\n' +
    	indents(2) + 'public void ${methodName}()\n' +
    	indents(2) + '{\n';
		
this.options.footer = 
    	indents(2) + '}\n' +
    	indents(1) + '}\n' +
    	'}\n';