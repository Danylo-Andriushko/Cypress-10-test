export default class PurchasePage{
    getHeaderMainPage(){ return cy.get('.align-center') }
    getSelectQuantity(){ return cy.get('[name="quantity"]') }
    getBuyNowButton(){ return cy.get('[value="Buy Now"]') }
    getHeaderPaymentPage(){ return cy.get('.align-center') }
    

    checkHeaderMainPage(){
        return this.getHeaderMainPage()
    }

    selectQuantityOfProducts(){
        return this.getSelectQuantity()
    }

    buyNowButtonClick(){
        return this.getBuyNowButton()
    }

    checkHeaderPaymentPage(){
        return this.getHeaderPaymentPage()
    }

}