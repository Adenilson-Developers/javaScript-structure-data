
/* Inserindo elemento na primeira posição 
    -inicialmente precisamos deixar a primeira posição livre, deslocando 
    todos os elementos para a direita 

    - percorrendo todos os elementos do array deslocando o elemento anterior (i - 1 )
      para a nova posição (i), e por fim, fazer a atribuição do nova valor desejado 
      à primeira posição [0]
*/

let numbers = [0,1,2,3,4,5,6,7];

Array.prototype.insertFirstPosition = function(value){
    for(let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1)
console.log('==========Add================')
console.log(numbers)
console.log('=============================')

// removendo o primeiro elemento do array
numbers.shift()

console.log('==========Removed==========')
console.log(numbers);
console.log('===========================')



