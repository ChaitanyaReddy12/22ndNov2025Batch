import { Given, setDefaultTimeout, Then } from '@cucumber/cucumber';
import { loadEnvFile } from 'node:process';
import { toASCII } from 'node:punycode';
import { Browser, chromium, expect, Page } from 'playwright/test';

let browser: Browser, page: Page, page1: Page

setDefaultTimeout: (60 * 1000)

Given('I launch the browser1', async function () {

    console.log('I launch the browser')

    // to launch the browser

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    const context = await browser.newContext({ viewport: null })

    page = await context.newPage()

});

Then('I close the browser1', async function () {

    await page.close()
});

Then('I launch the amazon application', async function () {

    await page.goto("https://www.amazon.in/")

});

Then('I Verify Playwright Hard Assertion', async function () {

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible()

    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles")

    await expect(page.getByPlaceholder("Search Amazon.in")).toBeTruthy()

    await page.getByPlaceholder("Search Amazon.in").fill("home")

    //await expect(page.locator("//*[text()='Sell']")).toBeHidden()

    //await expect(page.locator("//*[text()='Sell']")).toBeDisabled()

    await expect(page.locator("//*[text()='Sell']")).toBeEnabled()

    await page.locator("//*[text()='Sell']").click()

    await expect(page.locator("#nav-cart-text-container")).toBeAttached()

    await expect(page.locator("#nav-cart-text-container")).toHaveCount(1)

    await expect(page.locator("//div[@id='nav-xshop-container']/div/ul/li")).toHaveCount(32)

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator("//*[@class='title']")).toHaveCount(17)

    var tabs = await page.locator("//*[@class='title']").allInnerTexts()

    await expect(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")

    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table', 'Dynamic Web Table'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Upload Files'])

    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")

    await expect(page.getByPlaceholder("Enter Name")).toHaveAttribute("id", "name")

    await expect(page.getByPlaceholder("Enter Name")).toHaveId("name")

    await expect(page.getByPlaceholder("Enter Name")).toBeEmpty()

    await page.getByPlaceholder("Enter Name").fill("tuesday")

    await expect(page.locator("//*[text()='START']")).toHaveRole("button")

    await expect(page.locator("//*[text()='START']")).toHaveText('START')

    await page.locator("//*[text()='START']").click()

    console.log("hi team good morning")

});

Then('I Verify Playwright Soft Assertion', async function () {

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeVisible()

    await page.getByPlaceholder("Search Amazon.in").fill("Mobiles")

    await expect.soft(page.getByPlaceholder("Search Amazon.in")).toBeTruthy()

    await page.getByPlaceholder("Search Amazon.in").fill("home")

    //await expect.soft(page.locator("//*[text()='Sell']")).toBeHidden()

    //await expect.soft(page.locator("//*[text()='Sell']")).toBeDisabled()

    await expect.soft(page.locator("//*[text()='Sell']")).toBeEnabled()

    await page.locator("//*[text()='Sell']").click()

    await expect.soft(page.locator("#nav-cart-text-container")).toBeAttached()

    await expect.soft(page.locator("#nav-cart-text-container")).toHaveCount(1)

    await expect.soft(page.locator("//div[@id='nav-xshop-container']/div/ul/li")).toHaveCount(32)

    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect.soft(page.locator("//*[@class='title']")).toHaveCount(17)

    var tabs = await page.locator("//*[@class='title']").allInnerTexts()

    await expect.soft(page.locator("//*[text()='Dynamic Button']")).toContainText("Dynamic Button")

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files', 'Static Web Table', 'Dynamic Web Table'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Upload Files'])

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute("class")

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveAttribute("id", "name")

    await expect.soft(page.getByPlaceholder("Enter Name")).toHaveId("name")

    await expect.soft(page.getByPlaceholder("Enter Name")).toBeEmpty()

    await page.getByPlaceholder("Enter Name").fill("tuesday")

    await expect.soft(page.locator("//*[text()='START']")).toHaveRole("button")

    await expect.soft(page.locator("//*[text()='START']")).toHaveText('START')

    await page.locator("//*[text()='START']").click()

    console.log("hi team good morning")

});

