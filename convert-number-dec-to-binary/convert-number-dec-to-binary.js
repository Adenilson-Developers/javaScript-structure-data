// class Stack {
//     constructor(){
//         this.items = [];
//     }

//     push(element){
//         this.items.push(element);
//     }
// }


// function decimalToBinary(decNumber){
//     let remStack = new Stack();
//     let number = decNumber;
//     let rem;
//     let binaryString = '';
//     while(number > 0){
//         rem = Math.floor(number % 2) // Obter o resto da divisão
//         remStack.push(rem); // fazendo o push desse valor na pilha
//         number = Math.floor(number / 2); // dividindo o number por 2
//     }
//     while(remStack.length > 0){
//         // fazendo o pop dos elementos da pilha até que ela esteja vazia
//         binaryString += remStack.pop().toString(); // concatenando os elementos removidos na pilha
//     }
//     return binaryString;
// }

// console.log('---->', decimalToBinary(233))


let binario = numero => {
    let remStack = [];
    let rem;
    let binaryArray = '';

    while(numero > 0){
        rem = Math.floor( numero % 2); // Obter o resto da divisão
        remStack.push(rem); // fazendo o push desse valor na pilha
        numero = Math.floor(numero / 2); // dividindo o number por 2
    }

    while(remStack.length > 0){
        binaryArray += remStack.pop().toString();
    }
    return binaryArray;
}

console.log(binario(10));