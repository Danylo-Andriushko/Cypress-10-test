@login
Feature: Login
 Scenario: Login successfully
  Given I open Login Page
  When I fill the username input
  And I fill the password input
  And I click on Login button
  Then I see message