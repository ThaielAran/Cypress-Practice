var pageLocators = {
    userInput : '#username',
    passInput : '#password',
    submitBtn : '#submit',
    errorMsg : '#error'
}

class LoginPage{
 
    constructor() {
        this.url = "/practice-test-login/"
        this.title = 'Login'
      }

    visit() { return cy.visit('/practice-test-login/') }

    userInput() {return cy.get(pageLocators.userInput)}
    passInput() {return cy.get(pageLocators.passInput)}
    submitBtn() {return cy.get(pageLocators.submitBtn)}
    errorMsg() {return cy.get(pageLocators.errorMsg)}

    typeUser(text) {this.userInput().type(text)}
    typePass(text) {this.passInput().type(text)}
    submit() {return this.submitBtn().click()}
}
export default LoginPage;