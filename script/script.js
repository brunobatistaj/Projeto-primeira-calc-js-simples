//seletor
let resp = document.querySelector('.resultado')


//funções
function insert(num){
    var numero = resp.innerHTML
    resp.innerHTML = numero + num
}

function limpar(){
    resp.innerHTML = ''
}

function backspace(){
    resp.innerHTML = resp.innerHTML.substring (0, resp.innerHTML.length-1)
}

function calcular(){
    var display = resp.innerHTML
    if(display){
        resp.innerHTML = eval(display)
    }else{
        resp.innerHTML = 'Erro'
    }
}