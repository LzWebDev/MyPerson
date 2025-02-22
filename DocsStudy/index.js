function multiplicar(b, a ){
    let resultado = 0
    for(let i = 0; i <b; i++){
        resultado += a
    }
    return b < 0 ? -resultado : resultado
}
console.log(multiplicar(7, 4))

function dividir(a, b){
    let resultadoDiv = 0
    while(a >= b){
        a -= b
        resultadoDiv++
    }
    return resultadoDiv
}
console.log(dividir(24, 4))

