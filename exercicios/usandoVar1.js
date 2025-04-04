// var expressam valores mesmo fora do próprio bloco de código
// com var
{
    {
        {
            {var sera = 'será?'}
        }
    }
}
console.log(sera)

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('Fora = ', numero)

// com let
var teste = 1
{
    let teste = 2 // caso não houvesse a definição da variavel nesse bloco ele iria procurar do bloco anterior 
    console.log('Dentro = ', teste)// let tem escopo de bloco, diferente do var
}
console.log('Fora = ', teste)