describe('Automated AJAX request', ()=>{

    beforeEach(()=>{
        cy.visit("https://uitestingplayground.com/ajax")
    })

    it("Wait with implicit wait", ()=>{
        cy.get('#ajaxButton').click()
        cy.wait(12000)
        cy.get('.bg-success').should('have.text', 'Data loaded with AJAX get request.')
    })

        it('Esperar con un enfoque BDD', () => {
            cy.get('#ajaxButton').click();

            cy.get('.bg-success', {timeout: 30000}).should('exist');
          });


          it.only('login with aliases', ()=>{

            cy.intercept('GET', '/ajaxdata').as('getAjax')

            cy.get('#ajaxButton').click();

            cy.wait('@getAjax').its('response.statusCode').should('not.eq', 400)
          })
    

})
