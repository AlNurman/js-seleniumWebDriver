const {Builder, By, Key, Util} = require("selenium-webdriver");

async function example(){
    let driver = await new Builder().forBrowser("safari").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("Selenium WebDriver Example", Key.RETURN)
}

example()