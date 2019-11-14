/**
 * Exemplo de uso do laço for
 * @author Euler Aguiar Giovanini
// document.write('<h1>Euler</h1>')
//  */
// let valor = 8
// for(let i=1; i<=10;i++){
//     document.write(valor+'x'+ ' '+i+'=' + (valor * i)+'<br>')
// }



for (let i = 0; i <= 10; i++) {
    document.write('<p>Tabuada do ' + i + '</p>')
    for (let j = 1; j <= 10; j++) {
        document.write(j + 'x' + j + '=' + (j * i) + '<br>')
    }

}