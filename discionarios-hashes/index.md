

## ESTRUTURA DE DADOS DE DICINARIO

` UM dicionário é usado para armazenar pares [chave, valor],
em que a chave pode ser usada para encontrar um elemento em particular. 
Um dicionario é muito parecido com um conjunto; um conjunto 
armazena uma coleção de elementos [chave,chave], enquanto 
um dicionario armazena um coleção de elementos chave 
[chave,valor]. Um dicionario também é conhecido como (mapa), tabela de simbolo e
array associativo

Podemos armazenar refer~encias de objetos.
`

## Metodos

[•] set(key, value): esse método adiciona um novo elemento ao
dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.

[•] remove(key): esse método remove value do dicionário usando key
como o parâmetro de busca.

[•] hasKey(key): esse método devolve true se key estiver presente no
dicionário, e false caso contrário.

[•] get(key): esse método devolve um value específico do dicionário
usando key como o parâmetro de busca.

[•] clear(): esse método remove todos os valores do dicionário.

[•] size(): esse método devolve a quantidade de valores contida no
dicionário. É semelhante à propriedade length da classe Array.

[•] isEmpty(): esse método devolve true se size for igual a zero, e false
caso contrário.

[•] keys(): esse método devolve um array com todas as chaves contidas no
dicionário.

[•] values(): esse método devolve um array com todos os valores
contidos no dicionário.

[•] keyValues(): esse método devolve um array com todos os pares de
valores [chave, valor] contidos no dicionário.

[•] forEach(callBackFn): esse método itera pelos valores (value) do
dicionário. A função callbackFn tem dois parâmetros: key e value.
Esse método também pode ser interrompido caso a função de callback
devolva false (é semelhante ao método every da classe Array).



## HashTable

[•] put(key,value): esse método adiciona um novo item à tabela hash (ou
pode atualizá-la também).

[•] remove(key): esse método remove o value da tabela hash usando key.

[•] get(key): esse método devolve um value específico encontrado com
key
