//PROOTYPES SÃO MECANISMOS PELO O QUAL OS OBJETOS
//JS HERDAM RECUROSS UNS DOS OUTROS
//OBJETOS LITERAIS
//  const ObjA ={
//     chaveA : 'a'
// }

// const ObjB ={
//     chaveB : 'b'
// }

// const ObjC = new Object()
// ObjC.chaveC = 'c';


// Object.setPrototypeOf(ObjB, ObjA);
// Object.setPrototypeOf(ObjC, ObjB);
// //console.log(ObjB.chaveA);
// console.log(ObjC.chaveB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;


}

Produto.prototype.desconto = function (porcentagem) {
    this.preco = this.preco - (this.preco * (porcentagem / 100));
}

Produto.prototype.aumento = function (porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100));
}

const p1 = new Produto('Vaso', 10)

//console.log(p1)

//p1.aumento(50)
//console.log(p1)

p1.desconto(50)
//console.log(p1)

//criando um objeto independente da funcao construtora produto
//posso pegar a funcao construtora produto para ser prototype de p2

const p2 ={
nome: 'camisola',
preco: 100
}
Object.setPrototypeOf(p2, Produto.prototype)

//console.log(p2)

p2.aumento(50)
//console.log(p2)

//OUTRA FORMA DE CRIAR PROTOTYPE

const p3 = Object.create(Produto.prototype)
p3.nome = 'caneta'
p3.preco = 40


p3.aumento(50)

//console.log(p3)

const p4 = Object.create(Produto.prototype,{
     preco:{
    writable: true,
    configurable:true,
    value: 20,
    enumerable:true,
    },
    tamanho: {
    writable: true,
    configurable:true,
    value: 50,
    enumerable:true,

    }

    })

p4.aumento(50)

console.log(p4)
