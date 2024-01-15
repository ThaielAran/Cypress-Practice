describe('Filling form with different data and elements', () =>{
    context('Fill in and submit from empty form', () =>{
        beforeEach(() =>{
            cy.visit('https://qavalidation.com/demo-form/')
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from failing the test
                return false
              })
        })
        it('Submit full form', ()=> {
            cy.get('#g4072-fullname').type('Thaiel Gallardo')
            cy.get('#g4072-email').type('thaiel@mail.com')
            cy.get('#g4072-phonenumber').type('2494216906')
            cy.get('#g4072-gender-button').click().get('#ui-id-1').click()
            cy.get('[name="g4072-yearsofexperience"][value="1"]').click()
            cy.get('.grunion-checkbox-multiple-options > :nth-child(2) > .checkbox-multiple').click()
            cy.get('#g4072-qatools-button').click().get('#ui-id-6').click()
            cy.get('#contact-form-comment-g4072-otherdetails').type('Contacting')
            cy.get('.wp-block-jetpack-button > .wp-block-button__link').click()
            cy.url().should('include', 'contact-form-sent')
            cy.get('#contact-form-success-header').should('include.text', 'Your message has been sent')
        })
        it('Submit form with required fields only', ()=> {
            cy.get('#g4072-fullname').type('Thaiel Gallardo')
            cy.get('#g4072-email').type('thaiel@mail.com')
            cy.get('.wp-block-jetpack-button > .wp-block-button__link').click()
            cy.url().should('include', 'contact-form-sent')
            cy.get('#contact-form-success-header').should('include.text', 'Your message has been sent')
        })
        it('Submit form without required fields', ()=> {
            cy.get('#g4072-fullname').type('Thaiel Gallardo')
            cy.get('.wp-block-jetpack-button > .wp-block-button__link').click()
            cy.get('#g4072-email').should('match', ':invalid');
        })
        it('Submit form with invalid required field', ()=> {
            cy.get('#g4072-fullname').type('Thaiel Gallardo')
            cy.get('#g4072-email').type('thaielmail.com')
            cy.get('.wp-block-jetpack-button > .wp-block-button__link').click()
            cy.get('#g4072-email').should('match', ':invalid');
        })
        it('Submit form with invalid required field2', ()=> {
            cy.get('#g4072-fullname').type('Thaiel Gallardo')
            cy.get('#g4072-email').type('thaiel@mail')
            cy.get('.wp-block-jetpack-button > .wp-block-button__link').click()
            cy.get('.form-error-message').should('include.text', 'Email requires a valid email address');
        })
        it('Submit full form and click on every element', ()=> {
            cy.get('#g4072-fullname').type('Thaiel Gallardo')
            cy.get('#g4072-email').type('thaiel@mail.com')
            cy.get('#g4072-phonenumber').type('2494216906')
            cy.get('#g4072-gender-button').click().get('#ui-id-2').click()
            cy.get('[name="g4072-yearsofexperience"][value="1"]').click()
            cy.get('[name="g4072-yearsofexperience"][value="2"]').click()
            cy.get('[name="g4072-yearsofexperience"][value="3"]').click()
            cy.get('[name="g4072-yearsofexperience"][value="4"]').click()
            cy.get('[name="g4072-yearsofexperience"][value="5"]').click()
            cy.get('[name="g4072-yearsofexperience"][value="Above 5"]').click()
            cy.get('.grunion-checkbox-multiple-options > :nth-child(1) > .checkbox-multiple').click()
            cy.get('.grunion-checkbox-multiple-options > :nth-child(2) > .checkbox-multiple').click()
            cy.get('.grunion-checkbox-multiple-options > :nth-child(3) > .checkbox-multiple').click()
            cy.get('.grunion-checkbox-multiple-options > :nth-child(4) > .checkbox-multiple').click()
            cy.get('#g4072-qatools-button').click().get('#ui-id-4').click()
            cy.get('#g4072-qatools-button').click().get('#ui-id-5').click()
            cy.get('#g4072-qatools-button').click().get('#ui-id-6').click()
            cy.get('#g4072-qatools-button').click().get('#ui-id-7').click()
            cy.get('#contact-form-comment-g4072-otherdetails').type('HeyHeyListenHeyListenHeyHeyHeyListenHeyHeyListenHeyListenHeyHeyHeyListenHeyHeyListen')
            cy.get('.wp-block-jetpack-button > .wp-block-button__link').click()
            cy.url().should('include', 'contact-form-sent')
            cy.get('#contact-form-success-header').should('include.text', 'Your message has been sent')
        })
    })
})