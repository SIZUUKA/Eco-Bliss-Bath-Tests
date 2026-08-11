describe('Panier - Tests fonctionnels', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('http://localhost:4200')
    cy.login()
  })

  it('Ajoute un produit au panier et vérifie qu’il apparaît', () => {
    cy.visit('http://localhost:4200/#/products/5')

    cy.get('[data-cy="detail-product-quantity"]').clear().type('1')
    cy.get('[data-cy="detail-product-add"]').click()

    cy.url().should('include', '/cart')
    cy.get('[data-cy="cart-line"]').should('exist').should('be.visible')
  })

  it('Vérifie que le stock du produit est affiché', () => {
    cy.visit('http://localhost:4200/#/products/5')

    cy.get('[data-cy="detail-product-stock"]')
      .should('be.visible')
      .and('contain', 'en stock')
  })

 it('Ajoute un produit au panier et vérifie que le stock diminue', () => {
  cy.visit('http://localhost:4200/#/products/10')

  cy.get('[data-cy="detail-product-stock"]').should('contain', '19 en stock')

  cy.get('[data-cy="detail-product-quantity"]').clear().type('1')
  cy.get('[data-cy="detail-product-add"]').click()

  cy.url().should('include', '/cart')

  cy.visit('http://localhost:4200/#/products/10')

  cy.get('[data-cy="detail-product-stock"]').should('contain', '18 en stock')
})

  it('Empêche l’ajout d’une quantité négative', () => {
    cy.visit('http://localhost:4200/#/products/6')

    cy.get('[data-cy="detail-product-quantity"]')
      .clear()
      .type('-1')

    cy.get('[data-cy="detail-product-add"]').click()

    cy.get('[data-cy="cart-line"]').should('not.exist')
  })

  // bug connu côté app : la limite à 20 n'est pas forcément bloquée
  it('Empêche une quantité supérieure à 20 dans le panier', () => {
    cy.visit('http://localhost:4200/#/products/6')

    cy.get('[data-cy="detail-product-quantity"]').clear().type('21')
    cy.get('[data-cy="detail-product-add"]').click()

    cy.visit('http://localhost:4200/#/cart')
    cy.get('[data-cy="cart-line"]').should('not.contain', 'Dans la forêt')
  })
})
