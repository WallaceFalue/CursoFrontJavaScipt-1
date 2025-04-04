// Armazenando um função em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenamento de uma função arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito 
const subitracao = (a, b) => a - b // apenas para uma linha

console.log(subitracao(2, 7))