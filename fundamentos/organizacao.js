var a = 30
let b = 4
// let e var definem variáveis, let é mais aconselhavel para evitar problemas futuros
var a = 30
b = 40
// var pode mudar o valor de uma variável, let não
console.log(a, b)
//definir variáveis diretamente como no python tbm funciona
a = 300
b = 400
console.log(a, b)
// variáveis do tipo const não podem ser alteradas, da erro no console
const c = 5
//c = 50
console.log(c)

// Resumo: da preferencia para a criação de variáveis por let (melhor), evitar o uso de var e utilizar o cont apenas para variávies que não desja alterar o valor futuramente