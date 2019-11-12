/**JoKenPô - PERA PAPEL TESOURA
 * @author Euler Aguiar Giovanini
 */
//Tabela itens
//pedra = 1
//papel = 2
//tesoura = 3

// Tabela combinações
// 1-1
// 1-2
// 1-3
// 2-2
// 2-3
// 3-3

let player
let pc
let resultado

function jogarPc() {
    pc = Math.floor(Math.random() * 3) + 1

    switch (pc) {
        case 1:
            document.getElementById('pc').src = 'pcpedra.png'

            break;
        case 2:
            document.getElementById('pc').src = 'pcpapel.png'

            break;
        case 3:
            document.getElementById('pc').src = 'pctesoura.png'

            break
    }

}

function jogar() {
    if (document.getElementById('pedra').checked === true) {
        player = 1
    }

    if (document.getElementById('papel').checked === true) {
        player = 2
    }
    if (document.getElementById('tesoura').checked === true) {
        player = 3

    }

    // alert(pc + " - " + player)
    resultado = pc + " - " + player
    // alert(resultado)
    
    if(pc === 1 && player === 1){
        document.getElementById('resultado').innerText='Empate!!!'
    }
    if(pc === 1 && player === 2){
        document.getElementById('resultado').innerText='Vitoria Player!!!'
    }
    if(pc === 1 && player === 3){
        document.getElementById('resultado').innerText='Vitoria PC!!!'
    }
    if(pc === 2 && player === 1){
        document.getElementById('resultado').innerText='Vitoria PC!!!'
    }
    if(pc === 2 && player === 2){
        document.getElementById('resultado').innerText='Empate!!!'
    }
    if(pc === 2 && player === 3){
        document.getElementById('resultado').innerText='Vitoria Player!!!'
    }
    if(pc === 3 && player === 1){
        document.getElementById('resultado').innerText='Vitoria PC!!!'
    }
    if(pc === 3 && player === 2){
        document.getElementById('resultado').innerText='Vitoria Player!!!'
    }
    if(pc === 3 && player === 3){
        document.getElementById('resultado').innerText='Empate!!!'
    }
}
