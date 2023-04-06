describe('Mensagens de erro no cadastro', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    });
    it('Verifica mensagens de validação', () => {
      cy.contains('a', 'Register now').click() 
      cy.contains('button', 'Register').click()
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
      cy.contains('button', 'Register').click()
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    })

    it('Verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('Daniella')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    }) 
    
    it('Verifica mensagem de nome maior que 2 caracteres', () => {
        cy.contains('a', 'Register now').click() 
        cy.get('input[formcontrolname="fullName"]').type('d')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
    }) 

    it('Verifica mensagem de user name deve ser em minúscula', () => {
        cy.contains('a', 'Register now').click() 
        cy.get('input[formcontrolname="userName"]').type('Daniella')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    }) 

    it('Verifica mensagem de senha maior que 8 caracteres', () => {
        cy.contains('a', 'Register now').click() 
        cy.get('input[formcontrolname="password"]').type('1')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    }) 
})