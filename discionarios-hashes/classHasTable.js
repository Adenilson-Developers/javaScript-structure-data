import { defaultToString } from './utils/utils.js';

class ValuePair{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    toString(){
        return `[#${this.key}: ${this.vlaue}]`;
    }
}

class HasTable {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHasCode(key){
        if(typeof key === 'number'){
            return key;
        }
        const tablekey = this.toStrrFn(key);
        let hash = 0;
        for(let i = 0; i < tablekey.length; i++){
            hash += tablekey.charCodeAt(i)
        }
        return hash % 37;
    }

    hashCode(key){
        return this.loseloseHasCode(key);
    }

    put(key, value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    /*Obtendo um value da instância de HasTable*/
    get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key){
        // Obtemos a posição com o hashCode;
        const hash = this.hashCode(key);
        // lemos o valore armazenado na posição hash
        const valuePair = this.table[hash];
        // caso ele nao seja null, removoemos
        if(valuePair != null){
            delete this.table[hash];
            return true;
        }
        return false;
    }
}

const hash = new HasTable();
hash.put('Gandof', 'gandof@email.com');
hash.put('John', 'john@gmail.com');
hash.put('Tyrion' , 'tyrion@gmail.com');
console.log(hash.hashCode('Gandof') + ' - Gandof');
console.log(hash.hashCode('John') + ' - John');
console.log(hash.hashCode('Tyrion') + ' - Tyrion');

