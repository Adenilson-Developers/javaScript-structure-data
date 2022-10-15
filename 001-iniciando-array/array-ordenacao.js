let numbers  = [15, 14, 13, 12, 11, 10, 9, 8,7, 6, 5, 4, 3, 2, 1];
//console.log(numbers.sort());
console.log(numbers.sort((a,b)=> a - b))
/*
   Esse código devolve um número negativo se b for maior que o número positivo
   se a for maior que b e 0 
*/

function compare(a,b){
    if(a < b){
        return -1
    }
    if(a > b){
        return 1
    }

    return 0;
}
console.log('------>',numbers.sort(compare));


/*
um objeto Person com o name e age e queremos ordenar de 
acordo com a idade (age) da pessoa. 
*/

// const friends = [
//     {name: 'John', age: 42},
//     {name: 'Adenilson', age: 29},
//     {name: 'Reddington', age: 50},
//     {name: 'Pedro', age: 29},
//     {name: 'Fernando', age: 20},
//     {name: 'Maria Luiza', age: 51},
// ];

// function comparePerson(a,b){
//     if(a.age < b.age){
//         return -1;
//     }
//     if(a.age > b.age){
//         return 1
//     }
//     return 0;
// };

// console.log(friends.sort(comparePerson));



