/**
 * Estudo do operador lógico AND
 * @author Euler A. Giovanini
 */

let receive
let sw1 = false
let sw2 = false

function sw(receive) {
    if (receive == 1 && sw1 == false) {
        document.getElementById("sw1").src = "swon.png"
        sw1 = true
    } else if (receive == 1 && sw1 == true) {
        document.getElementById("sw1").src = "swoff.png"
        sw1 = false
    } else if (receive == 2 && sw2 == false) {
        document.getElementById("sw2").src = "swon.png"
        sw2 = true
    } else if (receive == 2 && sw2 == true) {
        document.getElementById("sw2").src = "swoff.png"
        sw2 = false
    }
    if (sw1 == true && sw2 == true){
        document.getElementById("lamp").src = "on.jpg"
    }else if (sw1 == false && sw2 == false){
        document.getElementById("lamp").src = "off.jpg"
    }else{
        document.getElementById("lamp").src = "broken.jpg"
    }
}
