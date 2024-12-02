/// <reference types ='cypress'/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
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

    it.only('Deve buscar um produto com sucesso', () => {
        let nomeProduto = 'Atlas Fitness Tank'
        produtosPage.buscarProduto(nomeProduto)
        cy.get('.product_title').should('contain',nomeProduto)

    });

    it('Deve visitar a pagina do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});