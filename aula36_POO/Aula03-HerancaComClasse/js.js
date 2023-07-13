class DispositivoEletronico {
  constructor (nome) {
    this.nome = nome
    this.ligado = false
  }
  ligar () {
    if (this.ligado) {
      console.log(this.nome + ' ' + 'está ligado')
      return
    }

    this.ligado = true
  }
  desligar () {
    if (!this.ligado) {
      console.log(this.nome + ' ' + 'está desligado')
      return
    }
    
    this.ligado = false
  }
}

let smart = new DispositivoEletronico('Samsung')

smart.desligar()
smart.ligar()

console.log(smart)
// TRABALHANDO HERANÇA COM CLASSES
class Smarthphone extends DispositivoEletronico {
constructor(nome, cor, modelo) {
    super(nome)
    this.cor = cor
    this.modelo = modelo

}
}
let smart1 = new Smarthphone('Iphone', 'preto', 'A50')
smart1.desligar()
console.log(smart1)

// as classes vão herdar tudo do pai, não modifica o pai. Pode sobescrever a função
class Tablet extends DispositivoEletronico {
 constructor(nome, wifi){
    super(nome)
    this.wifi = wifi
}
ligar() {
    console.log(this.nome + ' ' + 'está ligado')
}
}

let minitablete = new Tablet('itablet',true)
minitablete.ligar()
minitablete.ligado = true
console.log(minitablete)