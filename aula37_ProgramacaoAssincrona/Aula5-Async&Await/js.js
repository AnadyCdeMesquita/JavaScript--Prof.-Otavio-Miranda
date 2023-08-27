const cincoMil = () => new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve('Promise 5000 resolvida');
},5000)

});

const mil = () => new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve('Promise Mil resolvida');
},1000)

});

const quinhentos = () => new Promise((resolve,reject) => {
    setTimeout(() =>{
    resolve('Promise 500 resolvida');
},500)

});

const resolvedoradePromisesAssincronas = async() => {
const resultado1 = await cincoMil();
console.log('código aleatório1');
const resultado2 = await mil();
console.log('código aleatório2');
console.log('código aleatório3');
console.log('código aleatório4');
const resultado3= await quinhentos();

console.log('Mensagens:'+ resultado3 + resultado2 + resultado1)
}

resolvedoradePromisesAssincronas()