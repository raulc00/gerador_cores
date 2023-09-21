var cor_atual
var random_cor 

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

function hover_out(){

    window.document.getElementById('bt_cor').style.animationName = "none"
}

function hover_menu(){

    window.document.getElementById('container_menu').style.cursor = "pointer"
}

// function abre_menu(){

//     window.document.getElementById('menu_teste').classList.toggle('show')
// }

// function salva_cor(){


// }

// function hover_totodile(){

//     window.document.getElementById('totodile').style.cursor = "pointer"
//     window.document.getElementById('totodile').style.backgroundImage = "totodile_gif.gif"
// }