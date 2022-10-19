const setA = new Set();
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(7)
const setB = new Set();
setB.add(4)
setB.add(2)
setB.add(5)
setB.add(3)
setB.add(6)

const union = (set1, set2) => {
    const unionAb = new Set();
    set1.forEach(value => unionAb.add(value))
    set2.forEach(value => unionAb.add(value))
    return unionAb;
}

    // Intersecção de conjuntos
    // Esse metódo devolverá todos os elementos presentes 
    // nos dois conjuntos

    const intersection = (set1, set2) => {
        const interSet = new Set();
        set1.forEach(value => {
            if(set2.has(value)){
                interSet.add(value);
            }
        })
        return interSet;
    }

    // verifica se o que tem no elemento setA, não tem no elemento setB
    const difference = (set1, set2) => {
        const diffeSet = new Set();
        set2.forEach(value => {
            if(!set1.has(value)){
                diffeSet.add(value);
            }
        })
        return diffeSet;
    }




// console.log(union(setA, setB))
// console.log(intersection(setA, setB));
console.log(difference(setA, setB));



