let a = 0, b = 1, temp;
for(let i = 2; i <= 10; i++){
    temp = a +b;         //TEMP = (A)0 + (B)1     // (TEMP)1 = (A)1 + (B)1 = 2  // (TEMP)2 = (A)1 + (B)2 = 3  //(TEMP)3 =(A)2+(B)3
    a = b;               // (A)0 = (B)1             // (A)1 = (B)1 = TEMP(1)     // (A)1 = (B)2          //(A)2 = B(2)
    b = temp             // (B)1 = TEMP(0 + 1) = 1  // (B)1 = (TEMP)1           // (B)2 = (TEMP)2       //(B)3 = (TEMP)3
    let novoNumero =  (i - 1) + (i - 2)
    
    console.log(b)
}
console.log((6 - 1) + (6 - 2))
/**
    0, 1, 2, 3, 5, 8, 13, 21
    NovoNumero(1) = (1 - 1) + (1 - 2) = -1
    NovoNumero(2) = (2 - 1) + (2 - 2) = 1
    NovoNumero(3) = (3 - 1) + (3 - 2) = 3
    NovoNumero(4) = (4 - 1) + (4 - 2) = 5
    NovoNumero(5) = (5 - 1) + (5 - 2) = 7
    NovoNumero(6) = (6 - 1) + (6 - 2) = 9
 */
console.log('==========')
function fibonacci(n){
    if(n <= 1) return n;
    return fibonacci(n -1) + fibonacci(n - 2)
}
console.log(fibonacci(6))

