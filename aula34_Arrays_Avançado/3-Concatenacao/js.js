 let nomes = ['a', 'b', 'c', 'd', 'e', 'f']
 let numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9]

 //let concatenacao = nomes.concat(numeros)

 //ou 

 //let concatenacao =[...numeros, ...nomes, 'g', 'o', 'p']

 let concatenacao =[...numeros, ...nomes, 'g', 'o', 'p',['pistola', 'pincel', 'caneta']]

 concatenacao = [...numeros, ...nomes, 'g', 'o', 'p',...['pistola', 'pincel',]]


 console.log(concatenacao)