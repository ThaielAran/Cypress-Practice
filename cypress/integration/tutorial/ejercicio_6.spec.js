describe('Testing API', () => {
    context('API testing on SWAPI', () => {

        it('Tests the endpoint people/2', () => {
            cy.request({
                method: 'GET',
                url: '/people/2/'
            }).then((response) => {
                console.log(response);
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property('skin_color', 'gold')
                expect(response.body.films).to.have.length(6)
            })
        })

        it('Tests the endpoint films/2', () => {
            cy.request({
                method: 'GET',
                url: '/people/2/'
            }).then((response) => {
                return response.body.films[1];
            }).then((secondFilm) => {
                cy.request({
                    method: 'GET',
                    url: secondFilm
                }).then((response) => {
                    expect(response.status).to.equal(200);

                    /*const date=cy.parseDate(response.body.release_date);
                    cy.isDate(date, {
                        format: "YYYY-MM-DD",
                      });*/

                    expect(response.body).to.have.property('characters')
                    expect(response.body.characters).to.have.length.of.at.least(2);
                    expect(response.body).to.have.property('planets')
                    expect(response.body.planets).to.have.length.of.at.least(2);
                    expect(response.body).to.have.property('starships')
                    expect(response.body.starships).to.have.length.of.at.least(2);
                    expect(response.body).to.have.property('vehicles')
                    expect(response.body.vehicles).to.have.length.of.at.least(2);
                    expect(response.body).to.have.property('species')
                    expect(response.body.species).to.have.length.of.at.least(2);
                })

            })
        })

        it('Tests the endpoint planets/4', () => {
            cy.fixture('planet4').as('planet')
            cy.get('@planet').then((planet) => {
                cy.request({
                    method: 'GET',
                    url: '/people/2/'
                }).then((response) => {
                    expect(response.status).to.equal(200);
                    return response.body.films[1];
                }).then((film2) => {
                    cy.request({
                        method: 'GET',
                        url: film2
                    }).then((film2) => {
                        expect(film2.status).to.equal(200);
                        return film2.body.planets[0];
                    }).then((planet4) => {
                        cy.request({
                            method: 'GET',
                            url: planet4
                        }).then((p4) => {
                            expect(p4.status).to.equal(200);
                            expect(p4.body.gravity).to.equal(planet.gravity)
                            expect(p4.body.terrain).to.equal(planet.terrain)
                        })
                    })
                })
            })

        })

        it('Tests the endpoint on planets/4`s response', () => {
            let planetUrl;
            let responses2;
            cy.request({
                method: 'GET',
                url: '/people/2/'
            }).then((response) => {
                expect(response.status).to.equal(200);
                return response.body.films[1];
            }).then((film2) => {
                cy.request({
                    method: 'GET',
                    url: film2
                }).then((film2) => {
                    expect(film2.status).to.equal(200);
                    return film2.body.planets[0];
                }).then((planet4) => {
                    cy.request({
                        method: 'GET',
                        url: planet4
                    }).then((response2) => {
                        planetUrl = response2.body.url
                        responses2 = response2
                        return planetUrl
                    }).then((responses) => {
                        cy.request({
                            method: 'GET',
                            url: responses
                        }).then((responses) => {
                            expect(responses.status).to.equal(200);
                            expect(responses.body).to.deep.equal(responses2.body)
                        })
                    })
                })
            })
        })

        it('Tests films/7 to not exist', () => {
            cy.request({
                method: 'GET',
                url: '/films/7/',
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.equal(404);
            })
        })
    })
})