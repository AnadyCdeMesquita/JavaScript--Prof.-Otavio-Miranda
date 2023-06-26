let maps = [1, 2, 3, 4, 5, 6, 7, 8]

let maps2 = maps.map(function(valor, indice) {
 return valor ** 2

})

console.log(maps2)

let pessoas = [
{ nome: 'laras', idade:65},
{ nome: 'fafa', idade:35},
{ nome: 'lili', idade:25},
{ nome: 'branca', idade:10},
{ nome: 'ila', idade:15},

]

// let pessoas2 = pessoas.map(function(obj) {
//    delete obj.nome
//     return obj

// })

// console.log(pessoas2)

//OU

let pessoas2 = pessoas.map(function(obj, indice) {
  const pessoas3 = {...obj}
    pessoas3.id = indice
    return pessoas3
 
 })
 
 console.log(pessoas2)
 