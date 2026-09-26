import { test, expect } from "@playwright/test"

test("Verify home page", async({page}) =>{
    await page.goto("https://e-commerce-dev.betterbytesvn.com/");
    const headingSite=page.getByRole("heading",{level: 1, name:"E-commerce site testing"});
    await expect(headingSite).toHaveText("E-commerce site testing");
})