/// <reference types ='cypress'/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('/produtos/')
    });


    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            // .first()
            // .last()
            // .eq(2)
            .contains("Arcadio Gym Short")
            .click()
        cy.get('#tab-title-description > a').should('exist')

    });
});