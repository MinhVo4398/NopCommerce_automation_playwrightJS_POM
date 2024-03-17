import BasePage from "./basePage";
import fs from "fs";
import {
  register_Text,
  userFirstName,
  userLastName,
  userSelectDay,
  userSelectMonth,
  userSelectYear,
  userEmail,
  userCompany,
  userPassword,
  registration_success_msg,
} from "../config";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

import {
  registerMenuBtnLoc,
  registerTextLoc,
  genderBtnLoc,
  firstNameLoc,
  lastNameLoc,
  daySelectLoc,
  monthSelectLoc,
  yearSelectLoc,
  emailLoc,
  companyLoc,
  passwordLoc,
  confirmPasswordLoc,
  registerBtnLoc,
  registerSuccessMsgLoc,
  continueBtnLoc,
} from "../locators/RegisterLocators.js";

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open_register_page() {
    await this.waitAndClick(registerMenuBtnLoc);
  }
  async verify_registered_text() {
    await this.verifyElementText(registerTextLoc, register_Text);
  }

  async enter_gender() {
    await this.isElementVisible(genderBtnLoc, testData.notVisibleText);
    await this.isElementEnabled(genderBtnLoc, testData.notEnabledText);
    await this.waitAndClick(genderBtnLoc);
  }

  async enter_first_name() {
    await this.isElementVisible(firstNameLoc, testData.notVisibleText);
    await this.isElementEnabled(firstNameLoc, testData.notEnabledText);
    await this.waitAndFill(firstNameLoc, userFirstName);
  }

  async enter_last_name() {
    await this.isElementVisible(lastNameLoc, testData.notVisibleText);
    await this.isElementEnabled(lastNameLoc, testData.isElementEnabled);
    await this.waitAndFill(lastNameLoc, userLastName);
  }

  async enter_birthday() {
    await this.isElementVisible(daySelectLoc, testData.notVisibleText);
    await this.isElementEnabled(daySelectLoc, testData.isElementEnabled);
    await this.selectOptionFromDropdown(daySelectLoc, userSelectDay);

    await this.isElementVisible(monthSelectLoc, testData.notVisibleText);
    await this.isElementEnabled(monthSelectLoc, testData.isElementEnabled);
    await this.selectOptionFromDropdown(monthSelectLoc, userSelectMonth);

    await this.isElementVisible(yearSelectLoc, testData.notVisibleText);
    await this.isElementEnabled(yearSelectLoc, testData.isElementEnabled);
    await this.selectOptionFromDropdown(yearSelectLoc, userSelectYear);
  }

  async enter_email() {
    await this.isElementVisible(emailLoc, testData.notVisibleText);
    await this.isElementEnabled(emailLoc, testData.isElementEnabled);
    await this.waitAndFill(emailLoc, userEmail);
  }
  async enter_company() {
    await this.isElementVisible(companyLoc, testData.notVisibleText);
    await this.isElementEnabled(companyLoc, testData.isElementEnabled);
    await this.waitAndFill(companyLoc, userCompany);
  }
  async enter_password() {
    await this.isElementVisible(passwordLoc, testData.notVisibleText);
    await this.isElementEnabled(passwordLoc, testData.isElementEnabled);
    await this.waitAndFill(passwordLoc, userPassword);
  }
  async enter_cpassword() {
    await this.isElementVisible(confirmPasswordLoc, testData.notVisibleText);
    await this.isElementEnabled(confirmPasswordLoc, testData.isElementEnabled);
    await this.waitAndFill(confirmPasswordLoc, userPassword);
  }

  async click_registration_btn() {
    await this.isElementVisible(registerBtnLoc, testData.notVisibleText);
    await this.isElementEnabled(registerBtnLoc, testData.notEnabledText);
    await this.waitAndClick(registerBtnLoc);
  }

  async verify_register_success_message() {
    await this.verifyElementText(
      registerSuccessMsgLoc,
      registration_success_msg
    );
    await this.waitAndClick(continueBtnLoc);
    //await this.page_pause();
  }
}
export default RegisterPage;
