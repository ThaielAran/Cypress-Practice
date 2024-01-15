describe('Implement waiting strategies',()=>{
    context('Simulate processing AJAX Request',()=>{
        beforeEach(()=>{
            cy.visit('http://uitestingplayground.com/ajax')
        })
        it('Returns a response after waiting with a BDD expectation',()=>{
            cy.get('#ajaxButton').click();
            cy.get('.bg-success', {timeout:16000}).should('be.visible')
        })
        it('Returns a response after waiting a specific time',()=>{
            cy.get('#ajaxButton').click();
            cy.wait(16000)
            cy.get('.bg-success').should('be.visible')
        })
        it('Wait for the service to return a response',()=>{
            cy.intercept('GET','/ajaxdata').as('getAjax')
            cy.get('#ajaxButton').click();
            cy.wait('@getAjax').its('response.statusCode').should('not.eq', 400)
        })
    })
})