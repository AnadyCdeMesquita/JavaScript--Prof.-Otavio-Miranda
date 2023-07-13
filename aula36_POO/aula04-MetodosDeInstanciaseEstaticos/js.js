class controleRemoto{
constructor(tv) {
this.tv = tv;
this.volume = 0;
}
aumentar(){
    this.volume += 2
}
diminuir(){
    this.volume -= 2

}
static trocapilha(){
console.log("ok, vou trocar");
}
}

let tv1 = new controleRemoto('LG')
tv1.diminuir()
tv1.diminuir()
tv1.diminuir()
controleRemoto.trocapilha()
console.log(tv1)
