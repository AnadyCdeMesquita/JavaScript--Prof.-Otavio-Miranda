function DigaOi(){
    console.log("Oi");


}
DigaOi();

//OBS: A função pode ser chamada no sobre e sob a função

//----------
let SouUmDado = function(){
console.log("SouUmDado");

}
SouUmDado()

//--------------------------------

function executaFuncao(funcao){
console.log("Executando a função");
funcao()
}
executaFuncao(SouUmDado)

// ARROW FUNCTION

let arrowfuncao = () => {
console.log("Essa é uma arrow function");
}
arrowfuncao()

//---------- DENTRO DO OBJETO TEM FUNÇÃO, PODE SE DECLARAR DE DUAS FORMAS

let pessoa = {
 nome: function(){
    console.log(' Forma de declarar função no objeto')
 }

}

pessoa.nome()

let animal = {

raca(){
console.log('Pode-se declarar funcao de outra forma')
}
}

animal.raca()

// ARROW FUNCTION COM UM PARÂMETRO

// let a = x => x * 2

// console.log(a(2))

//ARROW COM UM OBEJTO DE PARÂMETRO

let b = nome => ({nome});

console.log(b('boneca'))