function planoDeSaude(idade){
    valorInicial = 100
    if (idade < 10) {
        console.log(valorInicial + 80)
    } else if  (idade >= 10 && idade < 30) {
        console.log(valorInicial + 50)
    } else if (idade >= 30 && idade < 60) {
        console.log(valorInicial + 95)
    } else if (idade >= 60) {
        console.log(valorInicial + 130)
    } else {
        console.log("Erro")
    }
}

planoDeSaude(8)
planoDeSaude(15)
planoDeSaude(35)
planoDeSaude(52)
planoDeSaude(80)

// function planoDeSaude(idade){
//     switch(idade) {
//         case (idade < 10):
//             console.log(valorInicial + 80)
//             break
//         case (idade >= 10 && idade < 30) :
//             console.log(valorInicial + 50)
//             break
//         case (idade >= 30 && idade < 60):
//             console.log(valorInicial + 95)
//             break
//         case (idade >= 60):
//             console.log(valorInicial + 130)
//             break
//         default:
//             console.log('Erro')
//     }
// }

// planoDeSaude(9)
// planoDeSaude(10)
// planoDeSaude(29)
// planoDeSaude(30)
// planoDeSaude(59)
// planoDeSaude(60)
// planoDeSaude('a')
// planoDeSaude()
