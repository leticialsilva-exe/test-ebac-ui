/// <reference types ='cypress'/>
import produtosPage from "../../support/page-objects/produtos.page";
const produtos  = require('../../fixtures/produtos.json')


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

    it('Deve buscar um produto com sucesso', () => {
        let nomeProduto = 'Atlas Fitness Tank'
        produtosPage.buscarProduto(nomeProduto)
        cy.get('.product_title').should('contain',nomeProduto)

    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto("Atlas Fitness Tank")
        cy.get('.product_title').should('contain',"Atlas Fitness Tank")
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 4
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('S', 'Yellow', qtd)
        cy.get('.woocommerce-message').should('contain', qtd+' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho usando massa de dados da lista', () => {
        
        cy.fixture('produtos').then( dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].qtd)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)    
        })
    });

});