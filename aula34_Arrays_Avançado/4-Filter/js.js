//arrays literais
let nomes = ['ANADY', 'FERNANDO', 'SOCORRO', 'RAFAELA']

// function metfilter(valor) {
    
//     return valor.length > 6

// }

// let metfiltrado = nomes.filter(metfilter)

// console.log(metfiltrado)

//OU

// let metfilter = nomes.filter(function(valor) {
// return valor.endsWith('O')


// });

// console.log(metfilter)

//OU

// let metfilter = nomes.filter( valor=>valor.endsWith('O'))
    

//     console.log(metfilter)


//ARRAYS COM OBJECTS

let objetos = [
{carro: 'Mobi', marca: 'Fiat'},
{carro: 'Opala', marca: 'Chevrolet'},
{carro: 'Onix', marca: 'Ford'},
{carro: 'Audi', marca: 'Alfa Romeo'},
{carro: 'C20', marca: 'Citroen'},

]

// let objetos2 = objetos.filter(function(obj){
//  return obj.carro === 'Opala'


// })

// console.log(objetos2)

let objetos3 = objetos.filter(obj => obj.marca === 'Citroen')

console.log(objetos3)