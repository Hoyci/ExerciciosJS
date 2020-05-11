function juros1(capital, taxaJuros, tempo) { // J = C. i. t
    const jurosSimples = capital * taxaJuros * tempo
    console.log(jurosSimples)    
}

function juros2(capital, taxaJuros, tempo) { // M = C.(1+i)^t
    const montante = capital *  (1 + taxaJuros) ** tempo
    console.log(montante.toFixed(2))
}

juros1(1000, 0.10, 3)
juros2(2000, 0.04, 4)
