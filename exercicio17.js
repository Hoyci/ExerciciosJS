function salario(plano, salarioAtual){
    switch(plano){
        case 'A': case 'a':
            return salarioAtual + (salarioAtual * 0.1)
        case 'B': case 'b':
            return salarioAtual + (salarioAtual * 0.15)
        case 'C': case 'c':
            return salarioAtual + (salarioAtual * 0.2)
        default:
            return 'Plano Inválido'
    }
}

console.log(salario('A', 1000))
console.log(salario('a', 1000))
console.log(salario('B', 1000))
console.log(salario('b', 1000))
console.log(salario('C', 1000))
console.log(salario('c', 1000))
console.log(salario('D', 1000))
console.log(salario('d', 1000))