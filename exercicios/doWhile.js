function aleatorio (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// não mud muit coisa, ms torn desnecesrio declrr  variável ntes de usa-la
do { 
    escolha = aleatorio(-1, 10)
 
    console.log(`O número escolhido foi ${escolha}`)
} while (escolha != -1) 

console.log('Fim!')