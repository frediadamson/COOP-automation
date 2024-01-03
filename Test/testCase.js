const {By, Key, Builder} = require ("selenium-webdriver");
const assert = require ("assert");

describe ("Change income amount in the calculator", function(){
    it ("calculates new sum based on the entered amount", async function(){
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("https://www.cooppank.ee/kodulaen");
        let initialAmount = await driver.findElement(By.xpath('//*[@id="loan-tab--2"]/div/div[7]/div[2]/p/span[1]')).getText().then(function(value){
            return value
        });
        await driver.findElement(By.name("monthly_income")).clear();
        await driver.findElement(By.name("monthly_income")).sendKeys("2112", Key.RETURN);
        let newAmount = await driver.findElement(By.xpath('//*[@id="loan-tab--2"]/div/div[7]/div[2]/p/span[1]')).getText().then(function(value){
            return value
        });
        
        assert.notStrictEqual(initialAmount, newAmount);
    
        await driver.quit();
    });
});
describe ("Add balance of existing loans", function(){
    it ("calculates new sum based on the entered existing loans", async function(){
        let driver = await new Builder().forBrowser("chrome").build();

        await driver.get("https://www.cooppank.ee/kodulaen");
        let initialAmount = await driver.findElement(By.xpath('//*[@id="loan-tab--2"]/div/div[7]/div[2]/p/span[1]')).getText().then(function(value){
            return value
        });
        await driver.findElement(By.name("total_blance_existing_loans")).clear();
        await driver.findElement(By.name("total_blance_existing_loans")).sendKeys("4321", Key.RETURN);
        let newAmount = await driver.findElement(By.xpath('//*[@id="loan-tab--2"]/div/div[7]/div[2]/p/span[1]')).getText().then(function(value){
            return value
        });
        
        assert.notStrictEqual(initialAmount, newAmount);
    
        await driver.quit();
    });
});
