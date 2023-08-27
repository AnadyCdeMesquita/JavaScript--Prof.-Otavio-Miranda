// let p = Promise.resolve(10)

// console.log('bla,bla, bla, bla, bla, bla, bla, bla')


// p.then((value) => {
//  console.log(value)   
// })


// function verificarNumero(n) {
// return new Promise((resolve, reject) => {
// if (n===2){
// resolve('ok');
// }else {
// reject('nop');
// }
// });
// }


// verificarNumero(2).then((value) => { console.log(value)})
// .catch((err) => { console.log(err) })

function f(resolve, reject) {
setTimeout(() => {
if (2===2){
resolve('ok');
}else {
reject('nop');
}
},5000)
}

let promessa = new Promise(f)


promessa.then((value) => { console.log(value)})
promessa.catch((err) => { console.log(err) })
