const { default: PaymentPage } = require("../../pages/paymentPage")
const { default: PurchasePage } = require("../../pages/purchasePage")
const { default: UserData } = require("../users_data/users")


let users = new UserData()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
let wait = (seconds) => cy.wait(seconds)

describe('Test payment page',()=>{
    before('visit payment page',()=>{
        cy.visit('/payment-gateway/index.php')
    })
    it('check if correct page is displayed',()=>{
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/index.php')
        new PurchasePage().checkHeaderMainPage()
       .first().should('contain', 'Mother Elephant With Babies Soft Toy')
    })
    it('buying product', ()=>{
        new PurchasePage()
        .selectQuantityOfProducts().select('3')
        new PurchasePage()
        .buyNowButtonClick().click()
        wait(1000)
        new PurchasePage().checkHeaderPaymentPage()
        .first().should('contain', 'Payment Process')
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
        wait(1000)
    })

    it('input payment data', ()=>{
        new PaymentPage().inputCardNumber(users.cardNumber.numOfCard)
        wait(1000)
        new PaymentPage().selectExpirationData(users.expirationData.month, users.expirationData.year)
        new PaymentPage().getExpirationMonth().children('[value="4"]')
        .should('contain', users.expirationData.month)
        new PaymentPage().getExpirationYear().children('[value="2024"]')
        .should('contain', users.expirationData.year)
        new PaymentPage().inputCardCvv(users.cvvData.cvv)
        new PaymentPage().clickOnSubmitButton().click()
        new PaymentPage().confirPageHeader().then((el)=>{
            expect(el.text()).to.deep.includes('Payment successfull!')
        })
        cy.get('.button.special')
        .should('have.text', 'Home')
        .click()
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/purchasetoy.php')
    })
    
   
    })