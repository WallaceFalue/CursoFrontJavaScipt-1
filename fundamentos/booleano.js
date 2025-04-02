let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!true)// ! = negar

console.log('verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))
console.log(!!Infinity)
console.assert(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(('' || null || 0 || 'epa'))

let nome = ''
console.log(nome || 'Desconhecido')