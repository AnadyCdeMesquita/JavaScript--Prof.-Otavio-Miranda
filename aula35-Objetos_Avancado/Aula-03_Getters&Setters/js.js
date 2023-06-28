
// const obj ={
// nome: 'Anady',

// get objeto1 (){
// return this.nome
// },

// set objeto1 (nome2){
// this.nome = nome2
// },
// }

// console.log(obj.objeto1);
// obj.objeto1 = 'Fernando';
// console.log(obj.nome);







//2 EXEMPLO

// const str = 'computada'

// let obj ={
// a:'abc',
// get [str](){
//     return this.a
// },
// set [str](valor){
//     this.a = valor

// }
// }
// console.log(obj.computada)
// obj.computada = 'xyz'
// console.log(obj.computada)

// //EXEMPLO 3

// const objetopalavra = {

// listaSting:['anady', 'fernando', 'vevé', 'luiza'],

// get primeiralista(){
//     return this.listaSting.length? this.listaSting[0]: null
// },

// set primeiralista(valor){
// this.listaSting.push(valor)

// },
// }

// console.log(objetopalavra.primeiralista)
// objetopalavra.primeiralista = 'Sarah'
// console.log(objetopalavra.listaSting)

//EXEMPLO 4

let teste = { a: 1}

Object.defineProperty(teste, 'prop', {

    get () { 
        return this.a
    },

    set (valor) {
        this.a = valor

    },
    
    
})

console.log(teste.prop)

teste.prop = 10

console.log(teste.prop)