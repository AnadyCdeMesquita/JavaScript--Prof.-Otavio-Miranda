/*Anady Carvalho tem 42 anos, pesa 70 kg , tem 1.70 de altura e seu IMC é de 
Anady Carvalho nasceu em 1980.*/

const nome= "Anady";
const sobrenome= "Carvalho";
const idade= 42
const peso= 70;
const altura = 1.70;
let anoNascimento;
let imc;

imc = 70 / (1.70 * 1.70);
anoNascimento = 2022 - 42;

//template things

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}, tem ${altura} e seu IMC é de ${imc}. ${nome} nascem em ${anoNascimento}.`)
