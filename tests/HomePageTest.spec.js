const { test, expect } = require("@playwright/test")

test("Home Page", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/prod.html")

    const pageTitle = await page.title()
    console.log(`page Title is ${pageTitle}`)

    const pageURL = await page.url()
    console.log(`The url of page is ${pageURL}`)

    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://www.demoblaze.com/prod.html")
    await page.close()
})
