class Set {
    constructor(){
        this.items = {};
    }

    has(element){
        return element in this.items;
    }

    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true
        }
        return false
    }

    valueLegacy(){
        let values = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return values
    }

    union(otehrSet){
        const unioSet = new Set();
        let values = this.valueLegacy();
        for(let i = 0; i < values.length; i++ ){
            unioSet.add(values[i]);
        }

        values = otehrSet.valueLegacy();
        for(let i = 0; i < values.length; i++){
            unioSet.add(values[i]);
        }
        return unioSet;
    }

    // Intersecção de conjuntos
    // Esse metódo devolverá todos os elementos presentes 
    // nos dois conjuntos
    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.valueLegacy();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet;
    }

    // Esse metodo devolverá todos os elementos que estão
    // presentes em A, mas não em B
    difference(otherSet){
        const differenceSet = new Set();
        this.valueLegacy().forEach(value => {
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        })

        return differenceSet;
    }
}

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(3);
setB.add(4);
setB.add(2);
setB.add(5);
setB.add(6);

// const unionAB = setA.union(setB);
// console.log('--->',unionAB.valueLegacy());

// const intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.valueLegacy());

const differenceAB = setA.difference(setB);
console.log(differenceAB.valueLegacy());


