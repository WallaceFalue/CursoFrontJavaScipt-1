// trocar os valores das variáveis
let a = 7;
let b = 94;
// tradicional
a = 94;
b = 7;
// fomra diferente
let temp = a;
a = b;
b = temp;
// fomra mais prática 
[a, b] = [b, a]
console.log("a: " + a);
console.log("b: " + b);
