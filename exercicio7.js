// function bhaskara(a, b, c, tipo) {
//     switch(tipo) {
//         case "positivo": 
//             const discriminante = b**2 - 4 * a *c
//             const bhaskaraPos = -b + Math.sqrt(discriminante) / 2 *a
//             const bhaskaraNeg = -b -+ Math.sqrt(discriminante) / 2 * a
//                 return bhaskaraPos, bhaskaraNeg
//                 break
//         case "nulo": 
//             const discriminante = b**2 - 4 * a *c
//             const bhaskaraPos = -b + Math.sqrt(discriminante) / 2 *a
//                 return bhaskaraPos
//                 break
//         default: 
//             return "Esta equação não possui resultados reais"
//     }

// }



function bhaskara(a, b, c) {
    if (delta = b**2 - 4 * a * c > 0) {
        console.log("Delta é positivo")
        const x1 = (-b + Math.sqrt(delta)) / 2 * a
        const x2 = (-b - Math.sqrt(delta)) / 2 * a
        console.log("x1 =", x1,"e", "x2 =", x2)
    } else if (delta = b**2 - 4 * a * c == 0) {
        console.log("Delta é nulo")
        const x1 = (-b + Math.sqrt(delta)) / 2 * a
        const x2 = (-b - Math.sqrt(delta)) / 2 * a
        console.log("x1 =", x1, "e", "x2 =", x2)
    } else {
        console.log("Delta é negativo, logo não possui valores reais")
    }
}

bhaskara(1, 12, -13)
bhaskara(4, -4, 1)
bhaskara(1, -4, 5)