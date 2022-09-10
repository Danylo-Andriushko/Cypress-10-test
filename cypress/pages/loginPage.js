export default class LoginPage{
    getRegisterButton(){ return cy.get('.btn.btn-default:nth-child(2)') }

    clickRegostrationButton(){
        return this.getRegisterButton()
    }

}

