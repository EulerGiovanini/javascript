/**
 * Estudo do DOM
 * Estudo da função com passagem de parametros
 */


// sem passagem de parametros
//  function ligar(){
//     document.getElementById("lamp").src="on.jpg"
//  }

//  function desligar(){
//     document.getElementById("lamp").src="off.jpg"
//  }


// com passagem de parametros
let recebe

function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById("lamp").src = "on.jpg"
    } else {
        document.getElementById("lamp").src = "off.jpg"
    }
}

