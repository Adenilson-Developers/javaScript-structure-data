/*
Supomos que você precisa medir a temperatura de hora em hora durante alguns dias.
nesse caso você precisa relacionar as temperaduras do dia com as horas...
dia1[]  = 1hora[] = 76.2; 2hora[] = 83;
dia2[]  = 1hora[] = 76.2; 2hora[] = 83;

O javaScript não tem supporte para matrizes, porem podemos implementares arrays multidimensionais 
usando array de array 
*/

let averageTemp = []

// 1 dia
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

// dia 2;
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 72;
averageTemp[1][5] = 72;

// iterando pelos elemento do array bidimensionais

function printMatrix(myMatrix){
    for(let i = 0; i < myMatrix.length; i++){
        for(let j = 0; j < myMatrix[i].length; j++){
            console.log(myMatrix[i][j]);
        }
    }
}

// console.log('===========Matrix=========')
// printMatrix(averageTemp);
// console.log('==========================')

console.table(averageTemp);