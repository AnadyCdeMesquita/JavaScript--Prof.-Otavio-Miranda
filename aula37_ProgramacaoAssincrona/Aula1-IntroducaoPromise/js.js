// function rand (min, max) {
// min *= 1000;
// max *= 1000;
// return Math.floor(Math.random() * (max - min) + min);

// }

// function esperaAi(msg, tempo){
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(msg);
//     },tempo);

// });

// }

// esperaAi('frase 1', rand(1,4)).then(resposta => { console.log(resposta); return esperaAi('frase 2', rand(1,4))})
// .then((resposta) => { console.log (resposta); return esperaAi('frase 3', rand(1,4))})
// .then((resposta) => { console.log (resposta); return esperaAi('frase 4', rand(1,4))})
// .then((resposta) => { console.log (resposta)}) 
// //no final tem que fazer um then sem nada para ir até o final, até a frase 4.

//EXPLICAÇÃO NELIO ALVES
// function promessa(resolver, rejeitar){
// setTimeout(() =>{
// if (10<0){
//  resolver('p')
// }
// else{
// rejeitar ('q')
// }
// },3000)
// }

// const minhaPromessa = new Promise(promessa)

//  minhaPromessa.then(resposta => {
// console.log(' Resolveu com a resposta ' + resposta)
// })

// minhaPromessa.catch(erro => {
// console.log(' O erro ' + erro)
// })

//EXPLICAÇÃO BRAZILIAN 

//OBS: NÃO NECESSARIAMENTE PRECISA COLOCAR O REJECT
//OBS: PARA NÃO APARECER O ERRO NO MOTOR DO GOOGLE, BASTA ENCADEAR AS PROMISES, SEMPRE PRECISAE REPETIR A VARIÁVEL NOVA PROMESSA

const novaPromessa = new Promise((resolve, reject)=>{
let soma = 5
if(soma === 5) {
resolve('Tudo certo')
} 
else{
reject('Tudo errado');
}
})  

novaPromessa.then((resolver) => {
    console.log(resolver)
    
})
novaPromessa.catch((erro) => {
    console.log(erro)
    
})
novaPromessa.finally(() => {
    console.log('Eu sempre vou aparecer independente de certo ou errado')


})




    



