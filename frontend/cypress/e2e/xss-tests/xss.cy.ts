describe('Test XSS - Espace commentaire', () => {

  it('it did not contain XSS vulnerability', () => {
    cy.visit('http://localhost:4200')
    cy.login()

    cy.on('window:alert', () => {
      throw new Error('Une fenêtre d\'alerte s\'est affichée !')
    })

    cy.get('[data-cy="nav-link-reviews"]').click()

    cy.get('[data-cy="review-input-rating-images"] img').first().click()
    cy.get('[data-cy="review-input-title"]').type('Titre test XSS')
    cy.get('[data-cy="review-input-comment"]').type('<script>alert("XSS");</script>')
    cy.get('[data-cy="review-submit"]').click()

    cy.contains('Titre test XSS').should('be.visible')
  })
})
