
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Promise1 resolvida')
},5000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Promise2 resolvida')
},2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Promise3 resolvida')
},1000)
})

 Promise.all([promise1, promise2, promise3])
 .then((res) => { console.log(res)})
 //A promise retornada é resolvida com um array contendo todos os valores dos iteráveis passados como argumento (como valores que não são promises).

 Promise.race([promise1, promise2, promise3])
 .then((res) => { console.log(res)})
//  Este exemplo mostra como Promise.race()pode ser usado para correr vários temporizadores implementados com setTimeout(). O cronômetro com o menor tempo sempre vence a corrida e se torna o estado de promessa resultante.
//no caso a promise 3
