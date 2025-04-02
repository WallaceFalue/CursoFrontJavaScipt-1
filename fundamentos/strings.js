const escola = "cod3r"

console.log(escola.charAt(4)) //len() do python
console.log(escola.charAt(5)) // não da erro se não encontrar um objeto
console.log(escola.charCodeAt(3)) // unicode

console.log(escola.substring(1, 3)) // conta apartir do indice dado até o requerido

console.log("escola ".concat(escola). concat("!")) //concatenação de item em strings 
console.log(escola.replace(/\w/g, "e")) //auto explicativo

console.log('Ana, Maria, Pedro'.split(",")) //separadorS