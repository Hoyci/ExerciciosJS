function produto(codigo, quantidade){
    switch(codigo) {
        case 100:
            let a = 3.00 * quantidade
            console.log('R$', a.toFixed(2).toString().replace(".", "," ))
            break
        case 200:
            let b = 4.00 * quantidade
            console.log('R$', b.toFixed(2).toString().replace(".", ","))
            break
        case 300:
            let c = 5.50 * quantidade
            console.log('R$', c.toFixed(2).toString().replace(".", "," ))
            break
        case 400:
            let d = 7.50 * quantidade
            console.log('R$', d.toFixed(2).toString().replace(".", "," ))
            break
        case 500:
            let f = 3.50 * quantidade
            console.log('R$', f.toFixed(2).toString().replace(".", ","))
            break
        case 600:
            let g = 2.80 * quantidade
            console.log('R$', g.toFixed(2).toString().replace(".", ","))
            break
        default:
            console.log('Produto não existe')
    }
  }
  
  produto(100, 3)
  produto(300, 3)
  produto(555, 2)