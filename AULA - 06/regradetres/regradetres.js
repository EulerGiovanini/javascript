/**
 *  Programa para calcular porcentagem regra de três
 * @author Euler Aguiar Giovanini
 */

function calcular(){
    let x = Number(document.getElementById('txtX').value.replace(",", "."))
    let y = Number(document.getElementById('txtY').value.replace(",", "."))
    let resultado
    resultado= ((x/100)*y)
    frmRegra3.txtResultado.value = resultado.toFixed(2)


    // criar um pdv
    // colocar total, desconto, valor pago e o troco
}