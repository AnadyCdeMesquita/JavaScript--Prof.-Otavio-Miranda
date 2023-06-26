
// function identicacao() {
//  let nome = 'Anady';
//  return function() {
//     return nome
//  }
// }

// let id = identicacao();
// let id1 = id();

// console.log(id1);

function Pessoa(nome){
function persona(sobrenome){
    return sobrenome + ' ' + nome

}
 return persona
}

let p1 = Pessoa('Fernando')
let p2 = p1('Antonio')

console.log(p2);