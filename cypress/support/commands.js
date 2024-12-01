// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log:false}) //log:false esconde o dado na apresentacao do log  
    cy.get('.woocommerce-form > .button').click()
 })

Cypress.Commands.add('cadastro', (usuario, senha) => { 
    cy.get('#reg_email').type(usuario)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('editarDadosPessoais', (nome, sobrenome, nicknane) => {
    cy.get('#account_first_name').clear().type(nome)
    cy.get('#account_last_name').clear().type(sobrenome)
    cy.get('#account_display_name').clear().type(nicknane)
    cy.get('.woocommerce-Button').click()
})