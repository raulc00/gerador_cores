var cor_atual
var random_cor 

var bloco_1 = window.document.getElementById('bloco_1')
var bloco_2 = window.document.getElementById('bloco_2')
var bloco_3 = window.document.getElementById('bloco_3')
var block_4 = window.document.getElementById('bloco_4')

function mudar_cor(){

    random_cor = Math.floor(Math.random()*16777215).toString(16);

    window.document.getElementById('bt_cor').style.background = 'gray'

    window.document.body.style.background = '#' + random_cor

    window.document.getElementById('id_cor').innerHTML = 'Cor atual: ' + '#' + random_cor

}

function desclick_bt(){

    window.document.getElementById('bt_cor').style.background = 'white'

}

function hover_bt(){

    window.document.getElementById('bt_cor').style.animationName = "bt_animacao";
    window.document.getElementById('bt_cor').style.animationDuration = "10s"
    window.document.getElementById('bt_cor').style.cursor = "pointer"
}

function hover_out(id){

    window.document.getElementById(id).style.animationName = "none"
}

function hover_salvar(id){

    window.document.getElementById(id).style.cursor = "pointer"
    window.document.getElementById(id).querySelector("p").textContent = "+"
}

function hover_salvar_out(id){

    window.document.getElementById(id).querySelector("p").textContent = ""
}

function salvar_cor(id){

    window.document.getElementById(id).style.background = window.document.body.style.background

}


// function hover_totodile(){

//     window.document.getElementById('totodile').style.cursor = "pointer"
//     window.document.getElementById('totodile').style.backgroundImage = "totodile_gif.gif"
// }