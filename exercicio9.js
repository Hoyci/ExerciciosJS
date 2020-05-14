function sistemaDeNotas(nota) {
    const m5 = Math.ceil(nota/5) * 5
    if (nota < 38) {
        return 'se fodeu'
    } else if (m5 - nota < 3) {
        return m5
    } else {
        return nota
    } 
}

console.log(sistemaDeNotas(34))
console.log(sistemaDeNotas(35))
console.log(sistemaDeNotas(36))
console.log(sistemaDeNotas(37))
console.log(sistemaDeNotas(38))
console.log(sistemaDeNotas(84))
console.log(sistemaDeNotas(99))
console.log(sistemaDeNotas(81))