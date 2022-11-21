import { defaultCompare } from "./util/index.js";
import { MinHeap } from "./minHeap.js"

export class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }

    
}

function reverseCompare(compareFn){
    return (a,b) => compareFn(a, b)
}



const maxHeap = new MaxHeap();
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(5)
maxHeap.insert(1)
console.log('Heap size:', maxHeap.size());
console.log('Heap min value: ', maxHeap.findMinimum());

// Algoritmo de heap sort 
/* podemos usar a estrutura de dados do  heap binário para nos 
ajudar a criar um algoritmo de ordenação muito famoso 
o heap sort.  

*/ 

function heapSort(array, compareFn = defaultCompare){
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while(heapSize > 1){
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn)
    }
    return array;
}

function buildMaxHeap(array, compareFn){
    for(let i = Math.floor(array.length / 2); i >= 0; i -= 1){
        heapify(array, i, array.length, compareFn);
    }
    return array;
}
const array = [7,6,3,5,4,1,2];
console.log('Before sorting:', array);
console.log('After sorting:', heapSort(array));