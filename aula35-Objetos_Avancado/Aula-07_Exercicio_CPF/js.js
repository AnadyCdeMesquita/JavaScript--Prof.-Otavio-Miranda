// let cpf = '705.484.450-52'

// let cpflimpo = cpf.replace(/\D+/g,'') //continua sendo string, tira tudo que não é numero

// console.log(cpflimpo)


// let cpfarray2 = Array.from(cpflimpo) //transforma string em array to
// console.log(cpfarray2)

function validaCPF(cpfEnviado){
Object.defineProperty(this, 'cpfLimpo', {
enumerable: true,
get: function(){    
return cpfEnviado.replace(/\D+/g,'')
}
});
}
let cpf = new validaCPF('705.484.450-52')

console.log(cpf.cpfLimpo)