function anuidade(mes, valor){
    const montante = 50 *  (1 + 0.05) ** mes
    console.log(montante.toFixed(2))
}

anuidade(1)
anuidade(2)
anuidade(3)
anuidade(4)
anuidade(5)