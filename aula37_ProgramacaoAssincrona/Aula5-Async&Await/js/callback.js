
const saudacao = (nome) => {
alert ('olá' + nome);
}

const processamento = (callback) => {
    const nome = prompt ( 'Digite seu nome')
    callback (nome)

}
processamento(saudacao);