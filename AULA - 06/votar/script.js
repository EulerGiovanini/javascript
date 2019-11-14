function verificar() {
    if (document.getElementById('txtIdade').value >= 16 && document.getElementById('txtIdade').value < 18) {
        document.getElementById('resultado').innerText = 'Para você o voto é facultativo'
    } 
    if (document.getElementById('txtIdade').value >= 18 && document.getElementById('txtIdade').value <= 65) {
        document.getElementById('resultado').innerText = 'Para você o voto é obrigatório'
    }
    if (document.getElementById('txtIdade').value >65) {
        document.getElementById('resultado').innerText = 'Para você o voto é facultativo'
    }
    if (document.getElementById('txtIdade').value <16) {
        document.getElementById('resultado').innerText = 'Você ainda não pode votar'
    }
}

function limpar(){
    document.getElementById('resultado').innerText = ''
} 