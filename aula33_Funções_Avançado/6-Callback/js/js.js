
function rand (min=1000, max=3000) {
const num = Math.random() * (max - min + 1) + min
return Math.floor(num)

}



// function teste(){

// const testando = Math.random() * 11 
// return testando
// }

// let test = teste()

// console.log(Math.floor(test))

// function testando (callback) {
// let nome = 'anady'
// callback(nome)
// }
// function teste(nome) {
//     console.log(nome + ', ' + 'eu aprendi callback')
    

// }

// testando(teste)


let programacao = (n) => { // posso colocar qualquer tipo de parametro
 console.log(n) 
}

let programa =(callback) => {
let disciplina = 'matematica'
callback(disciplina)

}

programa(programacao)


// let animal = (animal1)=> {
//     console.log(animal1)

// }

// let nomes = (animal1,callback) => {
//     let animais = animal1
//     callback(animais)

// }

// nomes('gato', animal)