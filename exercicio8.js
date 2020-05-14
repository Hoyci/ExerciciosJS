let lista = "10, 20, 20, 8, 25, 3, 0, 30, 1"
function recorde(lista) {
    let pontuacao = lista.split(", ")
    let quebraDeRecorde = 1
    let piorJogo = 1
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]

    for (let i = 0; i < pontuacao.length; i++)  {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            quebraDeRecorde++
        } else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            piorJogo = i + 1
        }
    }
    return [quebraDeRecorde, piorJogo]
}

console.log(recorde(lista))