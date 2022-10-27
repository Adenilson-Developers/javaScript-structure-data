/*
    O fatorial de um número n é definido por n!, e é o resultado
    da multiplicação dos números de 1 a n.

    O fatorial de 5 é representado por 5! e é igual a 5 * 4 * 3 * 2 * 1, resultado e 120
*/

/*
    Fatoria interativo:
    para calcular o fatorial de qualquer número n, podemos defini-los 
    assim: (n) * (n - 1)* (n - 2) * ( n - 3) * ... * 1
*/

// É possível escrever uma função para calcular o fatorial de um 
// usando um laço

function factorlInterative(number){
    if(number < 0){
        return undefined;
    }

    let total = 1;
    for(let n = number; n > 1; n--){
        total = total * n;
    }
    return total;
}

console.log(factorlInterative(5));

/*
    Fatorial recursivo
    Vamos escrever a função factorlInterative usando recursão

    ex: factorial(5) = 5 * fatorial(4) : podemos calcular 5! como 5 * 4!
        factorial(5) = 5 *  ( 4 * factorial(3)) podemos calcular 4 * 3;
        factorial(5) = 5 * 4 * (3 * factorial(2)) podemos calcular 3 * 2
        factorial(5) = 5 * 4 * 3 * (2 factorial(1)) podemos calcular 2 * 1;
        factorial(5) = 5 * 4 * 3 * 2 * (1) precisamos resolver o problema de calcular 1!;

        factorial(1) ou factoria(0) devolve 1. 1! é igual a 1;

        podemos dizer também que 1! = 1 * 0! e 0! também é 1
        
*/

// função factorial usando recursão 
function factorial(n){
    if(n===1 || n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));