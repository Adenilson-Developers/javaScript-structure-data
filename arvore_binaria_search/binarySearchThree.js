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

}