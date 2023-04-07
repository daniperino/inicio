describe('Deve fazer login valido e invalido', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Fazer login valido', () => {
       cy.login('flavio', '123')
       cy.contains('a','(Logout)').should('be.visible') 
    });
});