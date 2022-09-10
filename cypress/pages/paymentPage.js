export default class PaymentPage{
    getCardNumber(){ return cy.get('#card_nmuber') }
    getExpirationMonth(){ return cy.get('#month') }
    getExpirationYear(){ return cy.get('#year') }
    getCvv(){ return cy.get('#cvv_code') }
    getSubmitButton(){ return cy.get('[name="submit"]')}
    getConfirPageHeader(){ return cy.get('.table-wrapper') }


    inputCardNumber(number){
        return this.getCardNumber().type(number)
    }

    selectExpirationData(month, year){
        this.getExpirationMonth().select(month)
        this.getExpirationYear().select(year)
        return this
    }

    inputCardCvv(number){
        return this.getCvv().type(number)
    }

    clickOnSubmitButton(){
        return this.getSubmitButton()
    }

    confirPageHeader(){
        return this.getConfirPageHeader()
    }
}