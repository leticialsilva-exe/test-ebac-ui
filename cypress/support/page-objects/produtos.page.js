class ProdutosPage {

    visitarUrl() {
        cy.visit('/produto')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.tbay-search-result-wrapper .ui-menu-item').eq(0).click()
    }

    buscarProdutoLista(){
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto(nomeProduto){

        // cy.visit(`produto/${nomeProduto}`)

        const urlFormatada = nomeProduto.replace(/ /g, "-")
        cy.visit(`produto/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }
} 
export default new ProdutosPage()