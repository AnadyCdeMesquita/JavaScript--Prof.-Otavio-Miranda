// let soma = [10, 4, 7, 9, 23, 22, 55, 76, 80]

// let soma2 = soma.reduce(function(acumulador, valor) {
//     acumulador += valor
//     return acumulador
   

// },0 )

//console.log(soma2)

let objetos= [
{nome: 'anady', idade: 43},
{nome: 'socorro', idade: 66},
{nome: 'fernando', idade: 54},
{nome: 'mama', idade: 26},

]

// let objetos2 = objetos.reduce(function(acumulador, valor) {
//      acumulador += valor.idade
//      return acumulador


// },0)

// console.log(objetos2)

let objetos3 = objetos.reduce((acumulador, valor) =>{
 acumulador += valor.idade
return acumulador
},0)

console.log(objetos3)