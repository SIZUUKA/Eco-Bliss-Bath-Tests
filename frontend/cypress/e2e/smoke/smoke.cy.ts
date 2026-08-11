describe('Smoke Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Vérifie la présence des champs et boutons de connexion', () => {
    cy.get('[data-cy="nav-link-login"]').click()

    cy.get('[data-cy="login-input-username"]').should('be.visible')
    cy.get('[data-cy="login-input-password"]').should('be.visible')
    cy.get('[data-cy="login-submit"]').should('be.visible')
  })

  it('Vérifie la présence du bouton d\'ajout au panier', () => {
    // login "à la main" ici (pas cy.login) pour aussi checker les champs
    cy.get('[data-cy="nav-link-login"]').click()
    cy.get('[data-cy="login-input-username"]').type('test2@test.fr')
    cy.get('[data-cy="login-input-password"]').type('testtest')
    cy.get('[data-cy="login-submit"]').click()

    cy.contains('Produits').click()
    cy.contains('Consulter').first().click()

    cy.get('[data-cy="detail-product-add"]').should('be.visible')
  })
})
