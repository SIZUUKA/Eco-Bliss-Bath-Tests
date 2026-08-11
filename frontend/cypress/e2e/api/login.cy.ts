describe('Tests API - Login', () => {

  it('Connexion réussie avec un utilisateur connu', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/login',
      body: {
        username: 'test2@test.fr',
        password: 'testtest'
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })

  it('Connexion échouée avec un utilisateur inconnu', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/login',
      body: {
        username: 'inconnu@test.fr',
        password: 'mauvaispass'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(401)
    })
  })
})
