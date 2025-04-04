let valor 
console.log(valor)
//console.log(valor2)

valor = null // não apota para nenhuma direção na memória - usado para zerar uma variável ja utilizada
console.log(valor)
//console.log(valor.toString()) não da pra acessar propriedades de variáveis nulas

const produlto = {}
console.log(produlto.preco)
console.log(produlto)

produlto.preco = 3.50
console.log(produlto)

produlto.preco = undefined // não fazer isso, atrtibua 0 ou null
console.log(!!produlto.preco)
//delete produlto.preco
console.log(produlto)

produlto.preco = null // sem preço
console.log(!!produlto)
console.log(produlto)