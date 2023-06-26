let pessoas ={
nome: 'anady',
sobrenome: 'carvalho',

}

// console.log(pessoas.nome)
// console.log(pessoas.sobrenome)

// //OU

// console.log(pessoas['nome'])
// console.log(pessoas['sobrenome'])

let cachorro = new Object()
cachorro.nome = 'john'
cachorro.raca = 'poodle'
cachorro.idade = 3
cachorro.anonascimento = function(){
let data = new Date()
return data.getFullYear() - this.idade
}

 console.log(cachorro.anonascimento())

 for (let chave in cachorro){
    console.log(cachorro[chave])
    
    }

// let fiscal ={
// nome: 'fernando',
// idade: 63,
// nascimento: function(){
// let data = new Date()
// return data.getFullYear() - this.idade
// }
// }
//console.log(fiscal.nascimento())

// for (let chave in fiscal){
// console.log(chave)

// }

