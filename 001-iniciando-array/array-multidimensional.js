/*
É possivel criar arrays multidimensionais em javascript
vou criar uma matriz 3 X 3. cada célula contém a soma 
i (linha) + j (coluna) + z (profundidade)
*/

const matrix3x3x3 = [];
for(let i = 0; i < 3; i++){
    matrix3x3x3[i] = []; // inicializa cada array
    for(let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for(let z = 0; z < 3; z++){
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

for(let i = 0; i < matrix3x3x3.length; i++){
    for(let j = 0; j < matrix3x3x3[i].length; j++){
        for(let z = 0; z < matrix3x3x3[i][j].length; z++){
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

console.table(matrix3x3x3);