describe('Tests API - Produits', () => {
  it('Récupère les détails d\'un produit spécifique', () => {
    cy.request('GET', 'http://localhost:8081/products/5').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id')
    })
  })
})
