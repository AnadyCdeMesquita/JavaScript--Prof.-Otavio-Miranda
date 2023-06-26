// function Pessoa(nome, sobrenome) {
//  return {
// name: nome,
// surname: sobrenome,
// }
// }

// const p1 = Pessoa('Anady', 'Carvalho')

// console.log(p1)

// //// se o nome dos parâmetros forem iguais da propriedades, não precisa escrever tudo igual

// function Pessoa(nome, sobrenome) {
//     return {
//    nome,
//     sobrenome,
//    }
//    }
   
//    const p2 = Pessoa('Anady', 'Carvalho')
   
//    console.log(p2)

   // FUNÇÃO DENTRO DE FUNÇÃO---RETORNO

//    function Pessoa(nome){
//     function Pessoa1(sobrenome) {
//         return nome + ' ' + sobrenome;
//     }

//     return Pessoa1

// }

// let p1 = Pessoa('anady')
// let p2 = p1('carvalho')

// console.log(p2)

// function Multiplicador(n){
//  function Numero(x){
// return n * x
// }
// return Numero
// }

// let numeroMultiplicador = Multiplicador(2)
// let numeroParaMultiplicar = numeroMultiplicador(6)
// console.log(numeroParaMultiplicar)

// console.log(numeroMultiplicador)
//     

//====Clousure


function Multiplicador(n){
    return function (x){
    return n * x
    }
}

let numeroMultiplicador = Multiplicador(2)

let numero = numeroMultiplicador(5)
let numero1 = numeroMultiplicador(3)
let numero2 = numeroMultiplicador(2)
console.log(numero1)
//ou abaixo
//console.log(numeroMultiplicador(5))