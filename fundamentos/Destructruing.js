const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    } 
}
const {nome,idade} = pessoa //sestructing retira o valor das variaves de mesmo nome e cri novas, porém, as variaveis não ficam ligadas ao aobjeto, caso os valores do objeto mudem não haverá alteração no valor das variáveis
console.log(nome, idade)

