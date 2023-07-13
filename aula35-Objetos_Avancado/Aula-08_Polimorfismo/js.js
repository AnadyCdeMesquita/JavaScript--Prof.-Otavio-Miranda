function Conta (agencia, numeroConta, saldo) {
    this.agencia = agencia,
    this.numeroConta = numeroConta,
    this.saldo = saldo

}


Conta.prototype.sacar = function(valor){
if(valor > this.saldo){
 console.log(`O saldo é insuficiente`)
 return

}
this.saldo -= valor
this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
console.log(`Agência: ${this.agencia} | Conta: ${this.numeroConta} | |Saldo: ${this.saldo}`)

}

// let contatesteconta = new Conta(2925,147753, 100)
// contatesteconta.sacar(200)
// //contateste.depositar(100)

// console.log(contateste)

function contaCorrente(agencia, numeroConta, saldo, limite){
    Conta.call(this,agencia, numeroConta, saldo)
    this.limite = limite
}

contaCorrente.prototype = Object.create(Conta.prototype)
contaCorrente.prototype.constructor = contaCorrente

contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
    console.log('saldo insuficiente')
    return

}
  this.saldo -= valor
}

// let cc = new contaCorrente(2925,147753, 100, 150)
// cc.sacar(300)
// console.log(cc)

function contaPoupanca(agencia, numeroConta, saldo){
Conta.call(this, agencia, numeroConta, saldo)

}

contaPoupanca.prototype = Object.create(Conta.prototype)
contaPoupanca.prototype.constructor = contaPoupanca

let pp = new contaPoupanca(2925, 14775, 300)

pp.sacar(20)

console.log(pp)





