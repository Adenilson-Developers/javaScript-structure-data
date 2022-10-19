class Set {
    constructor(){
        this.items = {};
    }

    // verificar se exite elemento
    has(element){
        return element in this.items;
    }

    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    sizeLengacy(){
        let count = 0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++;
            }
        }
        return count
    }

    // metodos para acessar todos  os valores 
    ValueLegacy(){
        let value = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                value.push(key)
            }
        }
        return value;
    }

}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log('---->', set);
console.log('----------------------------------');
// set.delete(2);
console.log('metodo value', set.ValueLegacy());



