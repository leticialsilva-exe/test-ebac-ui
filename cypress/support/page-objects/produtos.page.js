class ProdutosPage {

    visitarUrl() {
        cy.visit('/produto')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.tbay-search-result-wrapper .ui-menu-item').eq(0).click()
        // cy.get('.button-search').eq(1).click()

    }

    buscarProdutoLista(){

    }

    visitarProduto(nomeProduto){
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()

    }

    addProdutoCarrinho(){

    }
} 
export default new ProdutosPage()