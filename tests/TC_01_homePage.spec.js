/* Scenario 2: 
Verify all element is visible and preform few action on home page.

Scenario Description: 
User navigate to the website and completes the checkout workflow. 
This is a Happy path test scenario.

Test Steps:
1.	Verify open website and check url and title
2.	Verify home page Header section
3.	Swithch currency and Verify Successfully change the currency or not
4.	Search product from search input field and add to cart
*/

import test from "../testFixture/fixture";

test.describe.serial("Verify all element with assertion in home page", () => {
  test("In home page verify all elements in proper assertion", async ({
    homePage,
  }) => {
    await test.step("Verify open website and check url and title", async () => {
      await homePage.openApp();
      await homePage.pageUrl();
      await homePage.pageTitle();
    });

    await test.step("Verify home page Header section logo is visible or not", async () => {
      await homePage.verifyLogoVisible();
    });

    await test.step("Swithch currency and Verify Successfully change the currency or not", async () => {
      await homePage.verifySwitchCurrency();
    });

    await test.step("Search product from search input field and add to cart", async () => {
      await homePage.searchProductFromInputField();
    });
  });
});
