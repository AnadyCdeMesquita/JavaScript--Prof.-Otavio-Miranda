// let arays = ['anady', 'fernando', 'boneca', 'socorro', 'trelele']

// arays[4]= 'Laura' //substituir

// console.log(arays)

// delete arays[1] // quando se deleta, fica um espaço vazio

// console.log(arays)

// let novoarrays = arays

// console.log(novoarrays)
// //Agora que se eu colocar SPREAD,NO novoarrays, aí fica diferente

// novoarrays = [...arays, 'batman','robby']

// console.log(novoarrays)

//SLICE - pega o array definido e pós virgula pega o array anterior

// let nomes = ['anady', 'fernando', 'socorro', 'italo','daniel', 'rodrigo']

// let pedacos = nomes.slice(2, -2)
// let fatias = nomes.slice(2, 4)
// console.log(pedacos)
// console.log(fatias)

//split = transforma string em array

let palavra = 'anady, carvalho, de, mesquita' //pode ser com vírgula ou sem vírgula

let palavras = palavra.split(' , ')

console.log(palavras)

//join = transforma array em string

let matriz = ['anady', 'carvalho', 'de', 'mesquita']

let nome = matriz.join('') // colocar o símbolo que quiser

console.log(nome)