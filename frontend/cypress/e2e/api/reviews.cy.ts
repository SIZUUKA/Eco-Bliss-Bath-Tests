describe('Tests API - Avis', () => {

  it('Crée un nouvel avis en étant connecté', () => {

    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/login',
      body: {
        username: 'test2@test.fr',
        password: 'testtest'
      }
    }).then((loginResponse) => {
      const token = loginResponse.body.token

      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/reviews',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: {
          title: 'Très bon produit',
          comment: 'Je recommande ce savon',
          rating: 5
        }
      }).then((resAvis) => {
        expect(resAvis.status).to.be.oneOf([200, 201])
      })
    })

  })
})
