/*
   jogo hot batato
   Nesse jogo, as crianças se organizam em um circulo e passa a batata quente para o seu
   vizinho o mais rápido possível. Em determinado ponto do jogo, 
   batata quente para de ser passada pelo círci=ulo de crianças
   e a criança que tiver a batata quente em mães deverá
   sair do círculo. Essa ação será repetida até que reste apenas uma
   criança ( a vencedora )

*/

class Queque {
        constructor(){
            this.count = 0;
            this.lowestCount = 0;
            this.items = {};
        }

        enqueue(element){
            this.items[this.count] = element;
            this.count++;
        }


        size(){
            return this.count - this.lowestCount;
        }

        isEmpty(){
            return this.size() === 0;
        }

        dequeue(){
            if(this.isEmpty){
                return undefined
            }
            const result = this.items[this.lowestCount];
            delete this.items[this.lowestCount];
            this.lowestCount++;
            return result;
        }
}

function hotPotato(elementsList, num){
    const queue = new Queque();
    const elimintsList = [];
    for (let i = 0; i < elementsList.length; i++){
        queue.enqueue(elementsList[i]);
    }

    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        elimintsList.push(queue.dequeue());
    }
    return {
        eliminated: elimintsList,
        winner: queue.dequeue()
    };
}

const names = ['Adenilson', 'Isaque', 'Roseane', 'Fernando', 'Thomas Shelby'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The Winner is: ${result.winner}`);

queue.enqueue('Adenilson')
queue.enqueue('Isaque')

