/*
 * Format for Selenium WebDriver Backed Java client (JUnit4)
 */

load('chrome://webdriver-backed-formatters/content/formats/java-base.js');
load('chrome://webdriver-backed-formatters/content/formats/java-webdriver-backed-base.js');

this.name = "java-junit4-webdriver-backed";

function testMethodName(testName) {
	return testName;
}

NotEquals.prototype.assert = function() {
	return "assertNotEquals(" + this.e1.toString() + ", " + this.e2.toString() + ");";
}

NotEquals.prototype.verify = function() {
	return "verifyNotEquals(" + this.e1.toString() + ", " + this.e2.toString() + ");";
}

options.header =
	"package ${packageName};\n\n" +
	"import com.thoughtworks.selenium.Selenium;\n" +
	"import org.openqa.selenium.*;\n" +
	"import org.openqa.selenium.htmlunit.*;\n" +
	"import org.openqa.selenium.firefox.*;\n" +
	"import org.openqa.selenium.chrome.*;\n" +
	"import org.openqa.selenium.ie.*;\n" +
	"import org.junit.*;\n" +
	"import static org.junit.Assert.*;\n\n" +
	"public class ${className} {\n\n" + 
	indents(1) + "WebDriver driver;\n" +
	indents(1) + "Selenium ${receiver};\n\n" +
	indents(1) + "@Before\n" +
	indents(1) + "public void startSelenium() {\n" +
	indents(2) + "driver = new ${driverImplementation};\n" +
	indents(2) + "${receiver} = new WebDriverBackedSelenium(driver, \"${baseURL}\");\n" +
	indents(1) + "}\n\n" +
	indents(1) + "@After\n" +
	indents(1) + "public void stopSelenium() {\n" +
	indents(2) + "driver.close();\n" +
	indents(1) + "}\n\n" +
	indents(1) + "@Test\n" +
	indents(1) + "public void ${methodName}() {\n";

options.footer =
	indents(1) + "}\n\n" +
	"}\n";
