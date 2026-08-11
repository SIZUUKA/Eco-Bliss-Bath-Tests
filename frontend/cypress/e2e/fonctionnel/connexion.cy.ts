describe('Test fonctionnel - Connexion', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Un utilisateur peut se connecter avec succès', () => {
    cy.login()

    cy.url().should('not.include', '/login')
  })
})
