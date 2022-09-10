import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
import Users from "../../fixtures/dataUser";
import Login from "../../pages/loginPage";
import Secure from "../../pages/securePage";

let secure = new Secure()
let login = new Login()
let users = new Users()

  Given("I open Login Page", () => {
    cy.visit("/login");
    
  });

  When("I fill the username input", () => {
     login.userName().type(users.userRegisterData.login)
  });

  And("I fill the password input", () => {
    login.userPassword().type(users.userRegisterData.password)
  });

  And("I click on Login button", () => {
    login.loginButton().click()
  });

  Then("I see message", () => {
    secure.securePageTitle().then((el)=>{
        expect(el.text()).to.contain('You logged into a secure area!')
      })
  });
