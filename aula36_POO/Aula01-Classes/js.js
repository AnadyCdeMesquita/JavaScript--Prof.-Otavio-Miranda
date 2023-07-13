class Pessoa {
constructor(nome, sobrenome) {
this.nome = nome;
this.sobrenome = sobrenome;
}
 falar(){
console.log(`${this.nome} ama falar`)
}
rezar(){
    console.log(`${this.nome} ama rezar`)
}
}

const pessoa2 = new Pessoa('Socorreth', 'Freitas')
console.log(pessoa2.falar())