function fruta(nome){
    switch (nome) {
        case 'Maça':
            return 'Não vendemos esta fruta aqui'
            break
        case 'Kiwi':
            return 'Estamos com escassez de kiwi'
            break
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Erro, fruta inválida'
    }
}

console.log(fruta('Maça'))
console.log(fruta('Kiwi'))
console.log(fruta('Melancia'))
console.log(fruta('coe'))