const { default: LoginPage } = require("../../pages/loginPage")
const { default: Registration } = require("../../pages/registartionPage")
const { default: UserData } = require("../users_data/users")
let users = new UserData()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
let wait = (seconds) => cy.wait(seconds)
describe('Test insurance page',()=>{
    it('visit registration page',()=>{
        cy.visit('/insurance/v1/index.php')
    })
    it('start registration',()=>{
        new LoginPage().clickRegostrationButton().then((el)=>{
            expect(el.text()).to.deep.include('Register')
        })
        new LoginPage().clickRegostrationButton().click()
        
    })

    it('fill registration form',()=>{
        new Registration().profession(users.profession.occupation)
        wait(1000)
        new Registration().fullName(users.userFullName.first_name, users.userFullName.surName)
        wait(1000)
        new Registration().phone(users.userPhone.phone)
        new Registration().dateOfBirth(users.date.year, users.date.month, users.date.day)
        new Registration().insuranceType().check()
        new Registration().licencePeriod(users.periodOfLicence.period[2])
        wait(2000)
        new Registration().occupation(users.occupationType.item.filter((el)=>{
          return  el === 'Writer'
        }))
        new Registration().adress(users.adress.street, users.adress.city, users.adress.country)
        new Registration().postCode(users.usersPostCode.postcode)
        new Registration().email(users.usersEmail.email)
        new Registration().password(users.usersPassword.password)
        new Registration().confirmPassword(users.usersPassword.password)
        wait(1000)
        new Registration().clickCreateButton().click()
        cy.url().should('eql', 'https://demo.guru99.com/insurance/v1/index.php')
    })
})