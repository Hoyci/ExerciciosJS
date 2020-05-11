function LadosDoTriangulo(lado1, lado2, lado3) {
    console.log(lado1, lado2, lado3)
    if (lado1 == lado2 == lado2 == lado3)
    console.log("Equilátero")
    else if (lado1 == lado2 &&  lado2 != lado3)
    console.log("Isósceles")
    else // (lado1 != lado2 &&  lado2 != lado3 &&  lado3 != lado1)
    console.log("Escaleno")
}

// && = E -- || = Ou
LadosDoTriangulo(2, 2, 2)
LadosDoTriangulo(2, 2, 3)
LadosDoTriangulo(2, 3, 4)



// const imprimirResultado = function (nota) {
//     if (nota.entre(9 , 10)) {
//         console.log('Quadro de Honra')
//     } else if (nota.entre(7, 8.99)) {
//         console.log('Aprovado')      
//     } else if (nota.entre(4, 6.99)) {
//         console.log('Recuperação')
//     } else if (nota.entre(0, 3.99)) {
//         console.log('Reprovado')
//     } else {
//         console.log('Nota Inválida')
//     }
// }