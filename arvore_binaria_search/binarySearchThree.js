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
}