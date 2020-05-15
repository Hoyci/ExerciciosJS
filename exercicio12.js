// const fatorial = (n) => n === 0 || n === 1 ? n : n * fatorial(n-1)
// console.log(fatorial(5))



function fatorial (valor) {
    if (valor === 0) {
        return 1
    } else  {
        return (valor * fatorial(valor - 1)) 
    }
}

console.log(fatorial(5))