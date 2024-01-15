var pageLocators={
    burgerMenu : '#toggle-navigation',
    coursesBtn : '#menu-item-21 > a',
    blogBtn : '#menu-item-19 > a',
    postHeader: '#loop-container > div > article > div.post-header > h1',
    logoutBtn : '#loop-container > div > article > div.post-content > div > div > div > a'
}

class HomePage{
    
   constructor() {
        this.url = "/logged-in-successfully/"
        this.title = 'Home'
      }
   
    burgerMenu() {return cy.get(pageLocators.burgerMenu)}
    coursesBtn() {return cy.get(pageLocators.coursesBtn)}
    blogBtn() {return cy.get(pageLocators.blogBtn)}
    postHeader() {return cy.get(pageLocators.postHeader)}
    logoutBtn() {return cy.get(pageLocators.logoutBtn)}

    clickBurgerMenu() {return this.burgerMenu().click()}
    clickCouses() {return this.coursesBtn().click()}
    clickBlog() {return this.blogBtn().click()}
    clickLogout() {return this.logoutBtn().click()}
}
export default HomePage;