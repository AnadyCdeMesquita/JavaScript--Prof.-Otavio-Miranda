// CONTINUE = Continue, ele pula um número que vc escolheu e continua o restante
//BREAK = ELE PARA E NÃO CONTINUA
//let testando = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// for (let valor of testando) {

//     if(valor === 5){
//     continue
//     }

//     if(valor === 8){
//     break
//     }

//     console.log(valor)

// }

// for (let i = 0; i < testando.length; i++) {

//     if (testando[i] === 6){
//     continue
//     }
//     if (testando[i] === 12){
//     break
    
//     }
//     console.log(testando[i])
// }

let testando = [1, 2, 3, 4, 5, 6, 7]
let i = 0

while (i < testando.length) {
  let t = testando[i];
  if (t === 4){
    i++
    continue

}

if (t===6){
i++
break
}

i++
console.log(t)

}


//testando o while simples
while (i < testando.length) {
console.log(testando[i])
i=i+1


}


