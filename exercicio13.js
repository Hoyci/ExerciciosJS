const diasDaSemana = function(dia) {
    switch (dia){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break
        case 1:
        case 7:
            return 'Final de semana'
            break
        default:
            return 'Dia inválido'
    }
}

console.log(diasDaSemana(1))
console.log(diasDaSemana(2))
console.log(diasDaSemana(3))
console.log(diasDaSemana(4))
console.log(diasDaSemana(5))
console.log(diasDaSemana(6))
console.log(diasDaSemana(7))
console.log(diasDaSemana('b'))
