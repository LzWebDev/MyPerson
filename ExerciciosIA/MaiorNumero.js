let numeros = [5, 8, 6]
const maiorNum = Math.max(...numeros)
console.log(maiorNum)

let numeros2 = [10, 50, 90, 5 , 40, 150, 230]

let MaiorNumero = numeros2[0]

for(let i = 0; i < numeros2.length; i++){
    if(numeros2[i] > MaiorNumero){
        MaiorNumero = numeros2[i]
    }
}
console.log(MaiorNumero)