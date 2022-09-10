export default class Secure{
    getSecurePageTitle(){ return cy.get('[id="flash"]') }

    securePageTitle(){
        return this.getSecurePageTitle()
    }
}