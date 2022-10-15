/* Supomos que queremos descobrir os 20 primeiros numeros da sequência fibonacci,
   os dois primeiros números da seguência de fibonacci são 1 e 2, e cada número subsequente 
   e a soma dos dois números anteriores 
*/


const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i <= 20; i++){
    // atribuir a soma das duas posições anteriores do array à posição atual 
    // começando pelo indice 3
    fibonacci[i] = fibonacci[i - 1 ] + fibonacci[i - 2];
}

// percorrendo o array, partindo da primeira posição até o seu tamanho
for(let i = 1; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
}