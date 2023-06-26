function Relogio(){
let data = new Date()

const hora = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

let intervalo
let hour = data.getHours()
let minutes = data.getMinutes()
let seconds = data.getSeconds()



setInterval (function(){
    function zero(x){
        if(x < 10){
        x = '0' + x
        } return x
        }
        minutes = zero(minutes)
        seconds = zero(seconds)
    
    hora.innerHTML = hour
    minutos.innerHTML = minutes
    segundos.innerHTML = seconds

}, 1000)


}

Relogio()