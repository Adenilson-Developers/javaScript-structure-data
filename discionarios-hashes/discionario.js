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

export default class Dictionary {
    constructor( toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] !=null;
    }

    set(key, value){
        if(key !=null && value !=null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
    }

    // metodo, buscando a a key em vez de value
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)]
            return true;
        }
        return false;
    }

    /*
    Esse metodo busca um key em particular no dicionario e obetem o seu value,
    ele obtera o objeto armazenado na propriedade key especificada, se o objeto 
    como parare de valores existir devolveremos o seu valor, caso contrario undefined
    */
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    /*
    Esse metodo devoverá um array com todos os objetos ValuePair presentes no dicionario
    */

    keyValues(){
        const valuePairs = [];
        for(const k in this.table){
            if(this.hasKey(k)){
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    };

    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values(){
        return this.keyValues().map(valuePair => this.values.value);
    }

    forEach(callbackFn){
        const valuePairs = this.keyValues();
        for(let i = 0; i < valuePairs.length; i++){
            const result =  callbackFn(valuePairs[i].key, valuePairs[i].value);
            if(result === false){
                break;
            }
    }
  }

  size(){
    return Object.keys(this.table).length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  clear(){
    this.table = {};
  }

  toString(){
    if(this.isEmpty()){
        return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toStrFn()}`
    for(let i = 0; i < valuePairs.length; i++){
        objString = `${objString}, ${valuePairs[i].toString()}`
    }
    return objString;
  }

}

const dictionary = new Dictionary();
dictionary.set('Gandof', 'gandaf@gmail.com')
dictionary.set('john', 'johnSnow@gmail.com');
dictionary.set('Tyrion', 'tytion@gamil.com');

console.log(dictionary.hasKey('Gandof'));

console.log(dictionary.size())

console.log(dictionary.keys())
// console.log(dictionary.values())
console.log(dictionary.keyValues())