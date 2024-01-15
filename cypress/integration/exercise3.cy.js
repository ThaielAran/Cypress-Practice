describe('Automate filling form', () => {
    context('Clean form page', () => {
        beforeEach(() => {
            cy.viewport(1280, 720);
            cy.visit('https://qavalidation.com/demo-form/');
        })
        it('Fills form with all data', () => {
            cy.get('#g4072-fullname').type('Miguel Molina').should('have.value', 'Miguel Molina');
            cy.get('#g4072-email').type('miguel.molina@qavalidation.com').should('have.value', 'miguel.molina@qavalidation.com');
            cy.get('#g4072-phonenumber').type('1234567890').should('have.value', '1234567890');
            cy.get('#g4072-gender-button').click().get('#ui-id-3').click();
            cy.get('[name=g4072-yearsofexperience][value="1"]').click();
            cy.get('[name="g4072-skills[]"][value="Automation testing"]').click();
            cy.get('[name="g4072-skills[]"][value="API testing"]').click();
            cy.get('#g4072-qatools-button').click().get('#ui-id-6').click();
            cy.get('#contact-form-comment-g4072-otherdetails').type('This is a comment').should('have.value', 'This is a comment');
            cy.contains('Submit!').click();
            cy.url().should('include', 'contact-form-sent');
            cy.get('#contact-form-success-header').should('include.text', 'Your message has been sent')
        })
        it('Fills form with only required data', () => {
            cy.get('#g4072-fullname').type('Miguel Molina').should('have.value', 'Miguel Molina');
            cy.get('#g4072-email').type('miguel.molina@qavalidation.com').should('have.value', 'miguel.molina@qavalidation.com');
            cy.contains('Submit!').click();
            cy.url().should('include', 'contact-form-sent');
            cy.get('#contact-form-success-header').should('include.text', 'Your message has been sent')
        })
        it('Fills form without required data', () => {
            cy.get('#g4072-fullname').type('Miguel Molina').should('have.value', 'Miguel Molina');
            cy.contains('Submit!').click();
            cy.get('#g4072-email').should('match', ':invalid');
        })
        it('Fills form with invalid data', () => {
            cy.get('#g4072-fullname').type('Miguel Molina').should('have.value', 'Miguel Molina');
            cy.get('#g4072-email').type('miguel.molinaqavalidation.com').should('have.value', 'miguel.molinaqavalidation.com');
            cy.contains('Submit!').click();
            cy.get('#g4072-email').should('match', ':invalid');
        })
    })
})