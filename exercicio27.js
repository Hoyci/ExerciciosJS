function tamanho(altura1, altura2, taxa1, taxa2) {
    const tempo = 5
    const menor = () => altura1 - altura2 != 0 ? "Existe uma criança menor" : "Não existe uma criança menor"
        console.log(menor())
    const sePassara = () => altura1 + taxa1 * tempo != altura2 + taxa2 * tempo ? "Passará" : "Não passará"
        console.log(sePassara())
    
    console.log(`Ela passará em ${tempo} anos.`)
}

tamanho(160, 160, 3, 3);
