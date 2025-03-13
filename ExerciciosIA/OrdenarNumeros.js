function Ordenar(lista){
    let n = lista.length
    let trocar

    do{
        trocar = false

        for(let i = 0; i < n - 1; i++){
            if(lista[i] > lista[i + 1]) {

                [ lista[i], lista[i + 1] ] = [ lista[i + 1], lista[i] ];

                trocar = true;
            }
        }
        n--;
    }   while (trocar)
    
    return lista
}
console.log(Ordenar([3, 1, 9, 8, 4]))
