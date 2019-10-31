function calcularImc() {
    peso = Number(frmImc.txtPeso.value.replace(",","."))
    altura = Number(frmImc.txtAltura.value.replace(",","."))
    imc = peso/(altura * altura)
    frmImc.txtResultImc.value = imc.toFixed(2)
}