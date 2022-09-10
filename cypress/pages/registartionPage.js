export default class Registration{
    getProfession(){ return cy.get('#user_title') }
    getFirstName(){ return cy.get('#user_firstname') }
    getSurName(){ return cy.get('#user_surname') }
    getPhone(){ return cy.get('#user_phone') }
    getYearOfBirth(){ return cy.get('#user_dateofbirth_1i') }
    getMonthOfBirth(){ return cy.get('#user_dateofbirth_2i') }
    getDayOfBirth(){ return cy.get('#user_dateofbirth_3i') }
    getInsuranceType(){ return cy.get('[type="radio"][value="Provisional"]') }
    getStreet(){ return cy.get('[name="street"]') }
    getCity(){ return cy.get('[name="city"]') }
    getCountry(){ return cy.get('[name="county"]') }
    getPostCode(){ return cy.get('#user_address_attributes_postcode') }
    getEmail(){ return cy.get('#user_user_detail_attributes_email') }
    getPassword(){ return cy.get('#user_user_detail_attributes_password') }
    getPasswordConfirm(){ return cy.get('#user_user_detail_attributes_password_confirmation') }
    getCreateButton(){ return cy.get('[type="submit"]') }
    getLicence(){ return cy.get('#user_licenceperiod') }
    getOccupation(){ return cy.get('#user_occupation_id') }

    profession(occupation){
        return this.getProfession().select(occupation)
    }


    fullName(firstName, surName){
        this.getFirstName().type(firstName)
        this.getSurName().type(surName)
        return this
    }
    phone(number){
        return this.getPhone().type(number)
    }

    dateOfBirth(year, month, day){
        this.getYearOfBirth().select(year)
        this.getMonthOfBirth().select(month)
        this.getDayOfBirth().select(day)
        return this
    }
    insuranceType(){
        return this.getInsuranceType()
    }
    

    licencePeriod(period){
        return this.getLicence().select(period)
    }

    occupation(typeOfOccupy){
        return this.getOccupation().select(typeOfOccupy)
    }

    adress(street, city, country){
        this.getStreet().type(street)
        this.getCity().type(city)
        this.getCountry().type(country)
        return this
    }

    postCode(code){
        return this.getPostCode().type(code)
    }

    email(mail){
        return this.getEmail().type(mail)
    }

    password(passw){
        return this.getPassword().type(passw)
    }
    confirmPassword(passw){
        return this.getPasswordConfirm().type(passw)
    }
    
    clickCreateButton(){
        return this.getCreateButton()
    }
}