const listaDePalavras = ['casa', 'osso', 'arara', 'navio']


for(let i = 0; i < listaDePalavras.length; i++){
    palavrasEmOrdem = listaDePalavras[i]
    VerificarPalindromo(palavrasEmOrdem)
}

function VerificarPalindromo(palavras){
    let p = palavras
    let pInvertida = palavras.split('').reverse().join('')
    if(p === pInvertida){
        console.log(`${p} e ${pInvertida} são iguas, é um palindromo`)
    }
    else if(p != pInvertida){
        console.log(`${p} e ${pInvertida} não são iguais, não é um palindromo`)
    }
    return
}