const nome = "Rebeca"
const concatencao = 'Olá ' + nome + "!"
const template = ` //concatenacção alternativa 
    olá
    ${nome}!` //${} para definir que é variável, considera quebra de linha
console.log(concatencao, template)
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)