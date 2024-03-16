import BasePage from "./basePage";
import fs from "fs";
import { baseUrl, currency, euroLogo, searchValue } from "../config";
import {
  logo,
  currencySelectBox,
  productPrice,
  searchField,
  searchBtn,
  productCart,
  addToCartBtn,
  successNotificationBar,
} from "../locators/HomeLocator";

import { expect } from "@playwright/test";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));
class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async openApp() {
    await super.open(baseUrl);
  }

  async pageUrl() {
    const url = await this.getUrl();
    console.log("Url: ", url);
    await expect(this.page).toHaveURL(url);
  }
  async pageTitle() {
    const title = await this.getTitle();
    console.log("Url: ", title);
    await expect(this.page).toHaveTitle(title);
  }

  async verifyLogoVisible() {
    await this.isElementVisible(logo, testData.notVisibleText);
  }
  async verifySwitchCurrency() {
    await this.isElementVisible(currencySelectBox, testData.notVisibleText);
    await this.selectOptionFromDropdown(currencySelectBox, currency);
    await expect(this.page.locator(productPrice)).toContainText(euroLogo);
  }

  async searchProductFromInputField() {
    await this.waitAndFill(searchField, searchValue);
    await this.waitAndClick(searchBtn);

    await this.waitAndClick(productCart);
    await this.waitAndClick(addToCartBtn);
    await this.toastHandle(successNotificationBar);
    await this.isElementVisible(
      successNotificationBar,
      testData.notVisibleText
    );
 
  }
}

export default HomePage;
