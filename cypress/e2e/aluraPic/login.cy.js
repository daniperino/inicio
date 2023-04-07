describe('Deve fazer login valido e invalido', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Fazer login válido', () => {
       cy.login('flavio','123')
       cy.contains('a','(Logout)').should('be.visible') 
    });

    it('Fazer login inválido', () => {
        cy.login('dan', '345')
        cy.on('window:alert', (str) =>{ //comando para o alert
            expect(str).to.equal('Invalid user name or password')
        })
    });
});