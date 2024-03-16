import BasePage from "./basePage";
import fs from "fs";
import { registerText } from "../config";
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

import {
  registerMenuBtn,
  registerText,
  genderBtn,
  firstNameInp,
  lastNameInp,
  daySelect,
  monthSelect,
  yearSelect,
  emailInp,
  companyInp,
  passwordInp,
  confirmPasswordInp,
  registerBtn,
} from "../locators/RegisterLocators.js";

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async open_Register_Page() {
    await this.waitAndClick(registerMenuBtn);
  }
  async verify_Registered_Text() {
    await this.verifyElementText(registerText, registerText);
  }

  async enter_Gender() {
    await this.isElementVisible(genderBtn, testData.notVisibleText);
    await this.isElementEnabled(genderBtn, testData.notEnabledText);
    await this.waitAndClick(genderBtn);
  }

  async enter_First_name() {
    await this.isElementVisible(firstNameInp, testData.notVisibleText);
    await this.isElementEnabled(firstNameInp, testData.notEnabledText);
    await this.waitAndFill()
  }
}

export default RegisterPage;
