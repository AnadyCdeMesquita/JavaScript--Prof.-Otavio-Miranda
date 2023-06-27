function Mercadoria (produto, preco, estoque) {


Object.defineProperty(this, 'estoque', {
    enumerable: true, // false by default, é true se e somente
    //se esta propriedade aparecer durante a enumeração do objeto.
    value: estoque, // o padrão é undefined. O valor pode ser associado a qualquer valor(numero, objeto e função)

    configurable: true, // false by default, é true se e somente se o valor puder ser alterado e a propriedade puder ser excluída do objeto
    writable: true, // false by default, é true se o valor puder ser alterado 

});

Object.defineProperties(this, {
    produto:{
    enumerable: true, // false by default, é true se e somente
    //se esta propriedade aparecer durante a enumeração do objeto.
    value: produto, // o padrão é undefined. O valor pode ser associado a qualquer valor(numero, objeto e função)

    configurable: true, // false by default, é true se e somente se o valor puder ser alterado e a propriedade puder ser excluída do objeto
    writable: true, // false by default, é true se o valor puder ser alterado 
},

    preco:{
    enumerable: true, // false by default, é true se e somente
    //se esta propriedade aparecer durante a enumeração do objeto.
    value: preco, // o padrão é undefined. O valor pode ser associado a qualquer valor(numero, objeto e função)

    configurable: false, // false by default, é true se e somente se o valor puder ser alterado e a propriedade puder ser excluída do objeto
    writable: true, // false by default, é true se o valor puder ser alterado 
}
});
}

let produto1 = new Mercadoria('camiseta', 20, 5)

console.log(produto1)
console.log(Object.keys(produto1))
//com Object.keys - podemos ver as chaves criadas

for (let chave in produto1){
console.log(chave)

}
