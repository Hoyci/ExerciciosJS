function cedula(valor){
    const cedulas = [100, 50, 20, 10, 5, 1]
    for (let i of cedulas) {
        if (valor % i) {
            a = Math.floor(valor / i)
            b = i % valor
            c = valor - (i * a)
            valor -= (i * a)
            console.log(`${a} nota(s) de R$ ${b}`, c)
        }
    }
}

cedula(150)