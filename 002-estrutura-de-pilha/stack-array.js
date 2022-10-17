class Stack {
    constructor(){
        this.items = [];
    }


    push(element){
        this.items.push(element);
    }
};

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log('---->',stack);




