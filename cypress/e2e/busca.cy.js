describe('Buscar um curso', () => {
  beforeEach(() => {
    cy.visit('/');

  })
  it('Buscar curso python', () => {
    cy.get('#header-barraBusca-form-campoBusca').type('python');
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome').should('contain', 'Formação Estatística com Python')
  })
})