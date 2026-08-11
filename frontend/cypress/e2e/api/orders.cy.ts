describe('Tests API - Commandes (Orders)', () => {

  let token: string = ''

  before(() => {
    cy.request('POST', 'http://localhost:8081/login', {
      username: 'test2@test.fr',
      password: 'testtest'
    }).then((loginResponse) => {
      token = loginResponse.body.token
    })
  })

  it('Accès aux données du panier sans connexion → doit être refusé', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(403)
    })
  })

  it('Récupère le panier en étant connecté', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      headers: { Authorization: `Bearer ${token}` }
    }).then((ordersResponse) => {
      expect(ordersResponse.status).to.equal(200)
    })
  })

  it('Ajoute un produit disponible au panier', () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:8081/orders/add',
      headers: { Authorization: `Bearer ${token}` },
      body: { product: 5, quantity: 1 }
    }).then((addResponse) => {
      expect(addResponse.status).to.be.oneOf([200, 201])
    })
  })

  it('Ajoute un produit en rupture de stock', () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:8081/orders/add',
      headers: { Authorization: `Bearer ${token}` },
      body: { product: 3, quantity: 1 },
      failOnStatusCode: false
    }).then((addResponse) => {
      expect(addResponse.status).not.to.be.oneOf([200, 201])
    })
  })

})
