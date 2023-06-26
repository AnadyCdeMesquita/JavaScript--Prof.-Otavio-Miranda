

let tarefa = document.querySelector('#tarefa');
let botao = document.querySelector('#btn');
let linha = document.querySelect('.lista');

function criaLi(){
const li = document.createElement('li');
return li
}

tarefa.addEventListener('keypress', function(e){
if (e.keyCode === 13){
if(!tarefa.value) return 
criaTarefa(tarefa.value)
}
})

function limpaInput(){
    tarefa.value = '';
    tarefa.focus();
    limpaInput()
    }

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    linha.appendChild(li);
}


botao.addEventListener('click',(e) => {
e.preventDefault();


});