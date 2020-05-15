function vendaDeCarro(nome){
    switch (nome){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(vendaDeCarro('hatch'))
console.log(vendaDeCarro('sedan'))
console.log(vendaDeCarro('motocicleta'))
console.log(vendaDeCarro('caminhonete'))
console.log(vendaDeCarro('unão da MASSA'))