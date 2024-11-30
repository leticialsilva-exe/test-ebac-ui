/// <reference types="cypress" />


describe('Funcionalidade: Login', ()=> {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('leticia.ebac@teste.com')
        cy.get('#password').type('Senha321@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, leticia.ebac')
    });

})
