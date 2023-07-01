//O Object.assign()método estático copia todas as propriedades próprias enumeráveis​​de um ou mais objetos de origem para um objeto de destino . Ele retorna o objeto de destino modificado.


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target,source);

console.log(returnedTarget)
//console.log(target)