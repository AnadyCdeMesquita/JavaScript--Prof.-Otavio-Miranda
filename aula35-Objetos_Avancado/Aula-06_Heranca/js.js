//PRODUTO - AUMENTO E DESCONTO 
//CAMISETA -COR / CANECA -MATERIAL

function Produto (nome, preco){
this.nome = nome;
this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
this.preco += quantia

}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
    
    }

    function Camiseta(nome, preco,cor){
        Produto.call(this, nome, preco)
        this.cor = cor
    
    }

    //para herdar o prototype de produto (desconto e aumento)
    Camiseta.prototype = Object.create(Produto.prototype)
//para tornar funcao camiseta sua propria construtora
    Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumentomais = function(porcentagem) {
this.preco = this.preco + (this.preco * (porcentagem/100))
}

    let produto = new Produto('generica', 111)
    let camiseta = new Camiseta('regata', 7.5, 'verde')
    // camiseta.aumento(20)
    // console.log(camiseta)
    // camiseta.desconto(2)
    // console.log(camiseta)
    // console.log(produto)
    camiseta.aumentomais(20)
    console.log(camiseta)

    function Caneca(nome, preco,material){
     Produto.call(this, nome, preco)
     this.material = material
    }

    Caneca.prototype = Object.create(Produto.prototype)
    Caneca.prototype.constructor = Caneca

    let caneca = new Caneca('nova', 20, 'porcelana')
    caneca.desconto(10)
    console.log(caneca)
