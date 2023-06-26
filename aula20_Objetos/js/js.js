
let teste ={

nome: 'Anady',
idade: 43,
estado_civil:'divorciada',
mae: 'Maria do Socorro',
fala: function(){
    console.log('olá mundo') 
},
 
idadec(){
 return this.idade +=5
},

apelido(n){
    return this.nome + this.idade + n
},
}
// teste.fala()
// console.log(teste.fala())
teste.idadec()
console.log(teste.idadec())
teste.apelido('rainha da grana')
console.log(teste.apelido('rainha da grana'))

//------------------------------------------------------------


// function test(nome, sobrenome, idade){
//     return{
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
    
    
//     }
// }

// let testando = test('Anady', 'Carvalho', 43)

// console.log(testando)

// function test(nome, sobrenome, idade){
//         return{
//          nome,
//         sobrenome,
//          idade,
        
        
//         }
//     }
    
//     console.log(test('Anady', 'Carvalho', 43))


//     let fazer =function (n){
//     let fazendo = n + 1
//     return fazendo
    
//     }

//    let fazendo = fazer(5)
