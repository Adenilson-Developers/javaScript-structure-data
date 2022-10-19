// class Queque {
//     constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {};
//     }
//     enqueue(element){
//         this.items[this.count] = element;
//         this.count++;
//     }

//     peek(){
//         if(this.isEmpty){
//             return undefined
//         }
//         const result = this.items[this.lowestCount];
//         delete this.items[this.lowestCount];
//         this.lowestCount++
//         return result;
//     }

//     isEmpty(){
//         return this.count - this.lowestCount === 0;
//     }

//     size(){
//         return this.count - this.lowestCount;
//     }

// }

// const que = new Queque();
// que.enqueue(1)
// que.enqueue(2)
// que.enqueue(3)
// console.log('========================================')
// console.log('peek',que.peek());
// console.log('peek -->',que.peek());
// console.log('========================================')
// console.log('metodo isEmpty:',que.isEmpty())
// console.log('========================================')
// console.log('size',que.size())

let decToBinary = number => {
    let remArmazenar = [];
    let rem;
    let stringBinary = '';

    while(number > 0){
        rem = Math.floor( number % 2)
        remArmazenar.push(rem)
        number = Math.floor(number / 2)
    }

    while(remArmazenar.length > 0){
        stringBinary += remArmazenar.pop().toString();
    }
    return stringBinary;
}

console.log('--->',decToBinary(10))


