const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

export function defaultCompare(a,b){
    if(a===b){
        return 0;
    }

    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// class SortedLinkedList extends LinkedList {
//     constructor(equalsFn = defaultEquals, compareFn = defaultCompare){
//         super(equalsFn);
//         this.compareFn = compareFn;
//     }
// }

export function Comparer(a,b){
    return a === b;
}