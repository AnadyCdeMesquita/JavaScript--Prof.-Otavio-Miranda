class Carro{
constructor(nome, marca, cilindro) {
this.nome = nome;
this.marca = marca;
this.cilindro = cilindro

}

get carros() {
 return this.nome + ' ' + this.marca + ' ' + this.cilindro;
}
set carros(valor){
this.nome = valor
this.marca= valor
this.cilindro = valor
}
}

let carrinho = new Carro('Nivus', 'Wolks', 1.0);
carrinho.nome = 'Monza'
carrinho.marca = 'chevrolet'
carrinho.cilindro = 1.3
console.log(carrinho)