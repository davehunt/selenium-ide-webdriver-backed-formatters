/*
 * Format for Selenium WebDriver Backed Java client (JUnit)
 */

load('chrome://webdriver-backed-formatters/content/formats/java-base.js');
load('chrome://webdriver-backed-formatters/content/formats/webdriver-backed-base.js');

this.name = "java-junit-webdriver-backed";

function testMethodName(testName) {
	return "test" + capitalize(testName);
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
	indents(1) + "public void setUp() {\n" +
	indents(2) + "driver = new ${driverImplementation};\n" +
	indents(2) + "${receiver} = new WebDriverBackedSelenium(driver, \"${baseURL}\");\n" +
	indents(1) + "}\n\n" +
	indents(1) + "public void tearDown() {\n" +
	indents(2) + "driver.close();\n" +
	indents(1) + "}\n\n" +
	indents(1) + "public void ${methodName}() {\n";

options.footer =
	indents(1) + "}\n\n" +
	"}\n";
