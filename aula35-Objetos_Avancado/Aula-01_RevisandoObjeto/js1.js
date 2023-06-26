let Pessoas = function (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

//Object.frizeer(this) não pode inclir nada e nem alterar nada na função
}

const p1 = new Pessoas('Anady', 'Carvalho')
p1.nome = 'Boneca'
///apesar de ser constante pode se fazer essa alteração
///caso não queira se mexer em hipótese algum pode ser colocar Object.freeze(p1)
const p2 = new Pessoas('Fernando', 'Figueredo')

console.log(p1.nome)