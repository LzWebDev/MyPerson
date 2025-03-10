let valorFatorial = 0
let fatorial
const valores = []
for(numeroFatoriado = 5; numeroFatoriado > 0; numeroFatoriado--){
    valores.push(numeroFatoriado)
    fatorial = valores.reduce((total, num) => total * num)
}
console.log(valores)
console.log(fatorial)