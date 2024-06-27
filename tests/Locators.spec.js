const { expect, test } = require("@playwright/test");

test("Locators", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("id=login2").click()

    // await page.locator("#loginusername").fill("cesrra")
    await page.fill("#loginusername", "cesrra")
    await page.fill("input[id='loginpassword']", "P4ssword")
    await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]")
    
    const logoutLink = await page.locator("//*[@id='logout2']")

    await expect(logoutLink).toBeVisible()

    await page.close()
})