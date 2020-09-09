export class Carousel {
    constructor(anterior, proximo, listaProdutos, navegacao) {
        this.anterior = document.querySelector(anterior)
        this.proximo = document.querySelector(proximo)
        this.listaProdutos = document.querySelector(listaProdutos)
        this.navegacao = document.querySelector(navegacao)

        console.log(this.listaProdutos)
        console.log('---------------------------')
        console.log(this.navegacao)
    }
}
