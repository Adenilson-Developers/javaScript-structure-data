 import { Comparer,defaultCompare } from "./util/index.js";

export class MinHeap{
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.heap = [];
    }
    getLeftIndex(index){
        return 2 * index + 1;
    }

    getRightIndex(index){
        return 2 * index + 2;
    }
    getParentIndex(index){
        if(index === 0){
            return undefined;
        }
        return Math.floor((index - 1) / 2);
    }

    // Inserindo um novo valor no heap
    insert(value){
        if(value !=null){
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }

    siftUp(index){
        let parent = this.getParentIndex(index);
        while(index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Comparer.BIGGER_THAN){
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    // Emcontranso valore mínimo e máximo 

    size(){
        return this.heap.length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    findMinimum(){
        return this.isEmpty ? undefined : this.heap[0];
    }

    /*
    Assim, se o heap não estiver vazio, devolveremos o primeiro índice do array, 
    */

    // extraindo valores mínimo e máximo do heap
    extract(){
        if(this.isEmpty()){
            return undefined;
        }

        if(this.size()){
            return this.heap.shift();
        }

        const removeValue = this.heap.shift();
        this.siftDown(0);
        return removeValue;

        /*
        Se o heap estive vazio, não haverá valor para extrair, 
        portanto pode devolver undefine, se houver apena um valor no heap,
        podemos remover e devolve-lo.
        */
    }

    // Operação de sift sown

    siftDown(index){
        let left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();

            if( letf < size && this.compareFn(this.heap[element], this.heap[left]) > Comparer.BIGGER_THAN){
                element = left;
            }

            if(right < size && this.compareFn(this.heap[element], this.heap[right]) > Comparer.BIGGER_THAN){
                element = right;
            }

            if(index !== element){
                swap(this.heap, index, element);
                this.siftDown(element);
            }

            /*O método siftDown receve o index do valor removido. Fazendo uma 
            cópia do index recebido na variável element
            */
    }
}

function swap(array, a,b){
    const tamp = array[a];
    array[a] = array[b];
    array[b] = tamp;
}

const heap = new MinHeap();
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(1)


// console.log('---->',heap)

// console.log('Heapsize:', heap.size());
// console.log('Heap is Empty', heap.isEmpty());
// console.log('Heap min value', heap.findMinimum());

for(let i = 0; i < heap; i++){
    heap.insert(i);
}
console.log('Extract minimu: ', heap.extract());