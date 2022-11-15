import { Compare, defaultCompare } from './util/util.js';
import { classNode } from './models/classNode.js';

export default class binarySeachTree {
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }
    // inserir uma nova key em uma arvore 
    insert(key){
        if(this.root == null){
            this.root = new classNode(key);

        }else{
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key){
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            if(node.left == null){
                node.left = new classNode(key);
            }else {
                this.insertNode(node.left, key);
            }
        }else {
            if(node.right == null){
                node.right = new classNode(key);
            }else {
                this.insertNode(node.right, key);
            }
        }
    }

    // Percurso em-ordem
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback){
        if(node != null){
            callback(node.key);
            this.inOrderTraverseNode(node.left, callback);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

     //percurso pos-ordem
     postOrdemTraverse(callback){
        this.postOrdemTraverseNode(this.root, callback);

    }

    postOrdemTraverseNode(node, callback){
        if(node != null){
            this.postOrdemTraverseNode(node.left, callback)
            this.postOrdemTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

     // pesquisa de valores mínimos e máximos

     min(){
        return this.minNode(this.root);
    }
    /*O método min nos permite encontrar a chave mínima, apartir de qualquer
    qualquer nó da chave. */
    min(node){
        let current = node;
        while(current != null && current.left != null){
            current = current.left;
        }
        return current;
    }

    // pesquisa de valores máximo
    max(){
        return this.maxNode(this.root);
    }
    maxNode(node){
        let current = node;
        while(current != null && current.right != null){
            current = current.right;
        }
        return current;
    }  

     // pesquisando um valor específico
     search(key){
        return this.searchNode(this.root, key);
    }

    searchNode(node, key){
        if(node == null){
            return false;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left, key);
        }else if(
            this.compareFn(key, node.key) === Compare.BIGGER_THAN
        ){
            return this.searchNode(node.right, key)
        }else {
            return true;
        }
    }

       // removendo no 
       remove(key){
        
        return this.removeNode(this.root, key)
        
    }

    removeNode(node, key){
        if(node == null){
            return null;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            node.rigth = this.removeNode(node.right, key);
            return node;
        }else {
            // key é igual a node.item
            // caso 1
            if(node.left == null && node.right == null){
                node = null;
            return node;
            }
            // caso 2
            if(node.left == null){
                node = node.right;
                return node;
            }
            // caso 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

}


const tree = new binarySeachTree();

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);


/*
console.log('------>',tree);
console.log('=============================')
const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);

console.log('=============================')
const printPosNode = (value) => console.log(value);
tree.postOrdemTraverse(printPosNode);

console.log(tree.search(1) ? 'key 1 found.':'key 1 not found.');
console.log(tree.search(8) ? 'key 8 found.':'key 8 not found.')
*/

tree.remove(7)
tree.remove(15)

console.log('------>',tree);
console.log('=============================')
const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);