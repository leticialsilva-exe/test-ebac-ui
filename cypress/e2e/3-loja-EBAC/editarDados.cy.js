/// <reference types='cypress'/>
import { faker } from '@faker-js/faker';

describe('Funcioncionalidade? Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('/minha-conta/edit-account')
        cy.fixture('perfil').then( dados => {
            cy.login(dados.usuario,dados.senha)
        })
    });
    it('Deve completar detalhes da conta com sucesso', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var nickName = faker.internet.username("Lele")

        cy.get('.page-title').should('exist')
        //cy.get('#main-content').should('contain','DETALHES DA CONTA')

        cy.editarDadosPessoais(nome, sobrenome, nickName)
        cy.get('.woocommerce-message').should("contain", "Detalhes da conta modificados com sucesso.")
    });
});