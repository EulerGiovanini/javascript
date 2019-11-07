/**
 * ESTUDO DO OPERADOR LÒGICO NOTE
 * @author Euler 
 */

 let sw1=false
 // variável de apoio à troca da chave 
//  false -> representa a chave desligada e true representa a chave ligada
let broken = false

 function sw(receive){
    

    if (sw1==false && receive==1){
        document.getElementById("sw1").src="swon.png"
        sw1=true
    } else{
        document.getElementById("sw1").src="swoff.png"
        sw1=false
    }
    // alert(sw1)
    // NOT

    

    if (!sw1){
        document.getElementById("lamp").src="on.jpg"
        
    } else{
        document.getElementById("lamp").src="off.jpg"
        
    }

 }