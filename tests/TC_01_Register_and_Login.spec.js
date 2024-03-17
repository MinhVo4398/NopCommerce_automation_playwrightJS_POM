/* Scenario 2: 
Registration and login with registered email and password.

Scenario Description: 
Registration and login with valid and invalid email and password to verify error message.

Test Steps :
1.	Verify open website and check url and title.
2.	Register a user with valid data and verify successfully registered or not.
3.	Login with valid credentials and verify successfully login or not.
4.	Login with invalid credentials and verify error message.
*/

import test from "../testFixture/fixture";

test.describe("Registration and login", async () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.openApp();
    await homePage.pageUrl();
    await homePage.pageTitle();
  });

  test("Register a user with valid data and verify successfully registered or not", async ({
    registerPage,
  }) => {
    await registerPage.open_register_page();
    await registerPage.verify_registered_text();
    await registerPage.enter_gender();
    await registerPage.enter_first_name();
    await registerPage.enter_last_name();
    await registerPage.enter_birthday();
    await registerPage.enter_email();
    await registerPage.enter_company();
    await registerPage.enter_password();
    await registerPage.enter_cpassword();
    await registerPage.click_registration_btn();
    await registerPage.verify_register_success_message();
  });
});
