const array = [5, 25, "texto1", "texto2"];

// Iterar o meu array
// Map - Vai percorrer cada um dos itens do meu array e vai retornar um novo array do mesmo tamanho fazendo algum tipo de modificação para cada item

const array2 = array.map((elementoAtual) => elementoAtual + "Diego");
// const array2 = array.map((elementoAtual) => elementoAtual);

// console.log(array2);

// Filter - Filtra um array com base em uma condição e retorna um array apenas com os elementos que respeitarem a condição do filtro

const array3 = array.filter(
  (elementoAtual) => typeof elementoAtual !== "number"
); // Retorna um novo array apenas com os elementos que não são números

console.log(array3);

// console.log(typeof array[2] === "number");
