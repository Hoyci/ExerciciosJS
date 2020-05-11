function calcularJuros(capital, taxaJuros, tempo, tipo) {
    switch(tipo) {
        case "simples": const jurosSimples = capital * taxaJuros * tempo
            return jurosSimples
            break
        case "composto": const montante = capital *  (1 + taxaJuros) ** tempo
            return montante.toFixed(2)
            break
        default:
            return "minha rola"
    }
}

console.log(calcularJuros(1000, 0.10, 3, "simples"))
console.log(calcularJuros(2000, 0.04, 4, "composto"))