// formas de definir números em constante
const peso1 = 1.0 // simples e direto (padrão)
const peso2 = Number('2.0') //utilizada para converter diferntes tipos strings (citacional)

console.log(peso1, peso2)
// valores com pontos podem ser considerados inteiros caso o valor apoós o ponto seja nulo (0)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))// toFixed(2) define máximo de casas decimais, nese caso 2

//conversão de valores 
console.log(media.toString(2)) //toString converte em diferentes tipos de números, o dois, por exemplo, transforma o número em binário (no tipo number)
console.log(typeof Number)