/// <reference types="cypress" />
const perfil  = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', ()=> {

    beforeEach(() => {
        cy.visit('/minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso - usando parametros de teste', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, leticia.ebac')
    });

    it('Deve fazer login com sucesso - usando fixture - native way', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log:false}) //log:false esconde o dado na apresentacao do log  
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, leticia.ebac')    
        })
    });

    it.only('Deve fazer login com sucesso - usando commands', () => {
        cy.fixture('perfil').then( dados => {
            cy.login(dados.usuario, dados.senha)
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, leticia.ebac')    
        })
    });

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.get('#username').type('leticia.ebac@test.com')
        cy.get('#password').type('Senha321@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
        // cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir o senha inválida', () => {
        cy.get('#username').type('leticia.ebac@teste.com')
        cy.get('#password').type('Senha321')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para')
    });
})
