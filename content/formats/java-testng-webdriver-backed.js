/*
 * Format for Selenium WebDriver Backed Java client (TestNG)
 */

load('chrome://webdriver-backed-formatters/content/formats/java-base.js');
load('chrome://webdriver-backed-formatters/content/formats/webdriver-backed-base.js');

this.name = "java-testng-webdriver-backed";

function testMethodName(testName) {
	return testName;
}

Equals.prototype.assert = function() {
	return "assertEquals(" + this.e2.toString() + ", " + this.e1.toString() + ");";
}

Equals.prototype.verify = function() {
	return "assertEquals(" + this.e2.toString() + ", " + this.e1.toString() + ");";
}

options.header =
	"package ${packageName};\n\n" +
	"import com.thoughtworks.selenium.Selenium;\n" +
	"import org.openqa.selenium.*;\n" +
	"import org.openqa.selenium.htmlunit.*;\n" +
	"import org.openqa.selenium.firefox.*;\n" +
	"import org.openqa.selenium.chrome.*;\n" +
	"import org.openqa.selenium.ie.*;\n" +
	"import org.testng.annotations.*;\n" +
	"import static org.testng.Assert.*;\n\n" +
	"public class ${className} {\n\n" + 
	indents(1) + "WebDriver driver;\n" +
	indents(1) + "Selenium ${receiver};\n\n" +
	indents(1) + "@BeforeMethod\n" +
	indents(1) + "public void startSelenium() {\n" +
	indents(2) + "driver = new ${driverImplementation};\n" +
	indents(2) + "${receiver} = new WebDriverBackedSelenium(driver, \"${baseURL}\");\n" +
	indents(1) + "}\n\n" +
	indents(1) + "@AfterMethod\n" +
	indents(1) + "public void stopSelenium() {\n" +
	indents(2) + "driver.close();\n" +
	indents(1) + "}\n\n" +
	indents(1) + "@Test\n" +
	indents(1) + "public void ${methodName}() {\n";

options.footer =
	indents(1) + "}\n\n" +
	"}\n";
