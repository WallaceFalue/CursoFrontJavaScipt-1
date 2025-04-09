Number.prototype.enter = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.enter(9, 10)) 
        console.log('Quadro de honra!')
    else if (nota.enter(7, 8.99))
        console.log('Aprovado!')
    else if (nota.enter(4, 6.99))
        console.log('Recuperação!')
    else if (nota.enter(0, 3.99))
        console.log('Reprovado!')
    else 
        console.log('Nota inválida!')
}

console.log('fim!')

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
