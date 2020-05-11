function quebrado(a, b) {
    var quebrado = (a + b)
    // console.log('R$: ', quebrado.toFixed(2))
    console.log("R$" + quebrado.toFixed(2).toString().replace(".", ","))
    
}

quebrado(0.1,  0.2)