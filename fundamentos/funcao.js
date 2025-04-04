// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // Esperado
imprimirSoma(1) //NaN
imprimirSoma(2, 1, 14, 9, 0) // se vc der mais valores que o requisitado a finção ignora os demais 
imprimirSoma() //NaN 

// função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2))