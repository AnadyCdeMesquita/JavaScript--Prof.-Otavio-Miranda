//FOR IN LER APENAS OS ÍNDICES DOS ARRAYS, STRING E AS CHAVES DOS OBJETOS


// let frutas = ['maca', 'pera', 'uva']

// // for (let index in frutas) {
// //     console.log(index, frutas[index])
// // }

// for (let index in frutas) {
//      console.log(index)
//     }

// let pessoa ={
// nome: 'anady',
// sobrenome: 'carvalho',
// idade: 43
// }

// for (let keys in pessoa) {
//     console.log(keys, pessoa[keys])

// }

let frutas = ['maca', 'pera', 'uva', 'laranja', 'morango']

for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
    //console.log(i)
}

for (let index in frutas){
console.log(index, frutas[index])
}

for (let valor of frutas){
console.log(valor)
}

