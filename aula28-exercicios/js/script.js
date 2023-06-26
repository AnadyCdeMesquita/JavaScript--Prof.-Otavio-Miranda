

// function paisagem (largura, altura) { 
   
//   if (altura > largura){
//    return true
//   }else{
//    return false
//   }

// }

// let foto = paisagem(20, 34)

// console.log(foto)

function teste(numero){
  if (numero % 3 === 0 && numero % 5 === 0){
    return 'FIZZBUZZ'
  } else if (numero % 3 === 0){
    return 'FIZZ'
} else if (numero % 5 === 0){
    return 'BUZZ'
} else if (typeof numero !== 'number'){ 
  return numero
} else{
  return numero
}
 
}


for (let i = 0; i <= 100; i++){
  console.log(i, teste(i))

}