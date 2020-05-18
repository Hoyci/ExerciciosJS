function calcularMedia(codigo, n1, n2, n3) {
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codigo}. \nNotas: ${n1}, ${n2}, ${n3}. \nMedia final: ${mediaFinal}, ${mediaFinal > 5 ? 'Aprovado' : 'Reprovado'}`)
}

// calcularMedia(123, 2.8, 6, 3.5)
// calcularMedia(124, 6, 7, 8)
calcularMedia(125, 6, 7, 8)
calcularMedia(126, 7, 8, 6)
calcularMedia(127, 8, 7, 6)