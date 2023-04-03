const webdriver = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function runAll() {
    let driver;
    try {
        console.log("start chrome ");
        driver = await new Builder()
            .forBrowser("chrome")
            .withCapabilities(webdriver.Capabilities.chrome())
            .setChromeOptions(new chrome.Options().addArguments("--disable-gpu"))
            // .setChromeOptions(new chrome.Options().addArguments("--headless").addArguments("--disable-gpu"))
            .build();

        await driver.get("https://wtech.inswave.kr/");
        await driver.sleep(30000);

    } catch (e) {
        console.log(e);
    } finally {
        if (driver != null) {
            await driver.quit();
        }
    }
}

runAll();
