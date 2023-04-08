describe('Registro de novo usuário', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    const usuario = require('../../fixtures/usuarios.json')

    usuario.forEach(usuario => {
        it(`Cadastro de novos usuários ${usuario.userName}`, () => {
            cy.contains('a', "Register now").click()
            cy.contains('a', 'Please, login!').should('be.visible')
            cy.get('input[formcontrolname="email"]').type(usuario.email)
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName)
            cy.get('input[formcontrolname="userName"]').type(usuario.userName)
            cy.get('input[formcontrolname="password"]').type(usuario.password)
            cy.contains('button','Register').click()
            
    
        });
    })
    

});