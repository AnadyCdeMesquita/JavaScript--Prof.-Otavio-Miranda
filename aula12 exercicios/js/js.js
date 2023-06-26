
let numero = 55
let numero2 = 55.1
let h2= document.getElementById('res')
let h3= document.getElementById('res3')
let h4= document.getElementById('res4')
let h5= document.getElementById('res5')
let h6= document.getElementById('res6')
let h7= document.getElementById('res7')


function calcular(){

  h3.innerHTML = "A raiz quadrada de 55 é: " + (Math.sqrt(numero)).toFixed(2) 

  if(Number.isInteger(numero) === false){

    h2.innerHTML = 'Não é um número inteiro'


} else {

    h2.innerHTML = 'É um número inteiro '


}

if(Number.isNaN(numero)=== false){ 

    h4.innerHTML = 'Não é NaN'
  
  

} else {

    h4.innerHTML = 'É um NaN '


}

h5.innerHTML = Math.round(numero2)

h6.innerHTML = Math.floor(numero2)

h7.innerHTML = Math.ceil(numero2)




}

calcular()

// let btn2 = document. getElementById('btn2')

// btn2.addEventListener('click', (e) =>{
// e.preventDefault()
// })