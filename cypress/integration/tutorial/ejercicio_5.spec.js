describe('Implement hooks',()=>{
    context('Simulate testing Swag Labs',()=>{
        before(()=>{
            cy.visit('https://www.saucedemo.com/')
        })
        beforeEach(()=>{
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click();
        })
        afterEach(()=>{
            cy.get('#react-burger-menu-btn').click();
            cy.get('#logout_sidebar_link').click();
        })
        after(()=>{
            cy.get('.login_logo').should('contain', 'Swag Labs') 
        })
        it('test 1',()=>{
            cy.log('test 1');
        })
        it('2',()=>{
            cy.log('test 2');
        })
        it('test 3',()=>{
            cy.log('test 3');
        })
        it('test 4',()=>{
            cy.log('test 4');
        })
        it('test 5',()=>{
            cy.log('test 5');
        })
    })
   context('Simulate testing ProductStore Blaze',()=>{
        before(()=>{
            cy.visit('https://demoblaze.com/')
        })
        beforeEach(()=>{
            cy.get('#next2').click();
        })
        afterEach(()=>{
            cy.get('#nava').click();
        })
        after(()=>{
            cy.get('[href="index.html"]').should('be.visible') 
        })
        it('test 1',()=>{
            cy.log('test 1');
        })
        it('2',()=>{
            cy.log('test 2');
        })
        it('test 3',()=>{
            cy.log('test 3');
        })
        it('test 4',()=>{
            cy.log('test 4');
        })
        it('test 5',()=>{
            cy.log('test 5');
        })
    })
})