// function funcao (){
//     let total = 0;
//     for (let argumentos of arguments){
//         total += argumentos
  
//     }
// console.log(total)
// }
// funcao(1, 2, 3, 4, 5, 6, 7)

function funcao(a, b=2, c=10){
console.log(a + b + c)
}
funcao(1,3)

//OBSERVAÇÃO: Os argumentos podem ser mudados, diferentes dos
//parâmetros. Pode ser colocados undefined caso queira pular
// funcao(1, undefined)... o c=10 se repete.