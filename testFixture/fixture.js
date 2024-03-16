import { test as fixture } from "@playwright/test";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/registerPage";

const test = fixture.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});
export default test;
