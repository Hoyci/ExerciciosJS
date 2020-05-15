function anoBissexto(ano){
    const calcular = () => ano % 4 == 0 &&  ano % 100 != 0 ? true : ano % 400 == 0
    console.log(calcular())
}

anoBissexto(2020)
anoBissexto(2021)
anoBissexto(2022)
anoBissexto(2023)
anoBissexto(2024)
anoBissexto(1580)
anoBissexto(1581)
anoBissexto(1582)
anoBissexto(1583)
anoBissexto(1584)
anoBissexto(400)
