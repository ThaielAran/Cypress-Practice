describe('Testing login', () =>{
    context('Testing login functionality with different credentials', () =>{
        beforeEach(() =>{
            cy.fixture('example').as('users')
            cy.visit('http://uitestingplayground.com/sampleapp')
        })
        it('Sends correct credentials',()=>{
            cy.get('@users').then((usuarios) =>{
                usuarios.credencialesBuenas.forEach((persona)=>{
                    var user=persona.nombre
                    var pass=persona.password
                    cy.get('[name="UserName"]').should('be.empty')
                      .type(user)
                      .should('have.value', user)
                    cy.get('[name="Password"]')
                      .type(pass)
                      .should('have.value', pass)
                    cy.get('#login').click()
                    cy.get('.text-success').should('include.text', 'Welcome')
                    cy.get('#login').click()
                })
            })
        })
        it('Sends incorrect credentials',()=>{
            cy.get('@users').then((usuarios) =>{
                usuarios.credencialesMalas.forEach((persona)=>{
                    var user=persona.nombre
                    var pass=persona.password
                    cy.get('[name="UserName"]').should('be.empty')
                      .type(user)
                      .should('have.value', user)
                    cy.get('[name="Password"]')
                      .type(pass)
                      .should('have.value', pass)
                    cy.get('#login').click()
                    cy.get('.text-danger').should('include.text', 'Invalid username')
                    cy.get('#login').click()
                })
            })
        })
        it('Sends incomplete credentials',()=>{
            cy.get('@users').then((usuarios) =>{
                usuarios.credencialesIncompletas.forEach((persona)=>{
                    var user=persona.nombre
                    var pass=persona.password
                    cy.get('[name="UserName"]').should('be.empty')
                      .type(user)
                      .should('be.empty')
                    cy.get('[name="Password"]')
                      .type(pass)
                      .should('have.value', pass)
                    cy.get('#login').click()
                    cy.get('.text-danger').should('include.text', 'Invalid username')
                    cy.get('#login').click()
                })
            })
        })
        it('Sends incomplete credentials2',()=>{
            cy.get('@users').then((usuarios) =>{
                usuarios.credencialesIncompletas2.forEach((persona)=>{
                    var user=persona.nombre
                    var pass=persona.password
                    cy.get('[name="UserName"]').should('be.empty')
                      .type(user)
                      .should('have.value', user)
                    cy.get('[name="Password"]')
                      .type(pass)
                      .should('be.empty')
                    cy.get('#login').click()
                    cy.get('.text-danger').should('include.text', 'Invalid username')
                    cy.get('#login').click()
                })
            })
        })
    })
})