let palavra = 'abobrinha' //A , b, O, b, r, I, n, h, A
const vogais = 'aeiouAEIOU'

let ppa = palavra.split('')

let totalVog = ppa.filter(letra => vogais.includes(letra)).length
console.log(totalVog)

