
function factory(nome, sobrenome, peso, altura) {
   return{
   nome,
   sobrenome,
   fala: function(assunto){
   return nome + ' ' + sobrenome + ' fala sobre: ' + assunto + '.'
   },
   peso,
   altura,
   imc(){
      let indice = (this.peso / (this.altura **2)).toFixed(2);
      return 'O seu IMC é ' + indice 
   
   }
   }
   
   

}

let resp = factory('Anady', 'Carvalho', 75, 1.68)
let resp1 = resp.fala('vida')
console.log(resp1)
let massaCorporal =resp.imc()
console.log(massaCorporal)
