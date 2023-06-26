let numeros = [1, 2, 3, 4, 14, 17, 32, 89, 24, 46]

let numeros2 = numeros
.filter(valor =>valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acc, valor) => acc + valor)

console.log(numeros2)