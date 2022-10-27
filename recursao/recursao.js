/*
A recursão é um método para resolução de problemas que consiste
em solucionar partes menores do mesmo problema até 
resolvemos o problema original, mais amplo. Em geral,
ela pode chamar a si mesmo diretamete
*/

// Funcursiva
function recursiveFunction(someParam){
    recursiveFunction(someParam);
}

// uma função também é chamada de recursiva se puder chamar a 
// a si mesmo

function recursiveFunction1(someParam){
    recursiveFunction2(someParam);
}

function recursiveFunction2(someParam){
    recursiveFunction1(someParam);
}

function understandRecursion(doIunderstandRecursion){
    const recursionAnswer = confirm('Do you understand recursion');
    if(recursionAnswer === true){
        return true;
    }
    understandRecursion(recursionAnswer);
}