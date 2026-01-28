const array = [1, 2, 3, 4, 5];


// for (const i of array) {
//   document.body.innerText += i;
// }
// Alternativa: Usando for...of para iterar sobre o array

// Usando forEach para iterar sobre o array
// array.forEach((numero) => {
//   console.log(`Número: ${numero}`);
// });

// array.forEach(item => {
//   document.body.innerText += item;
// });
// Alternativa: Usando forEach para iterar sobre o array

// const novoArray = array.map(item => {
//   if (item % 2 === 0) {
//     return item * 2;
//   } else {
//     return item * 3;
//   }
// })
// Usando map para criar um novo array com valores modificados

// const novoArray = array.filter(item => item % 2 === 0);
// Usando filter para criar um novo array com valores que atendem a uma condição

// const novoArray = array
// .filter(item => item % 2 === 0)
// .map(item => item * 2);
// Combinando filter e map para criar um novo array

// const todosItensSaoNumeros = array.every(item => typeof item === 'number');
// Usando every para verificar se todos os itens atendem a uma condição
// retorna true ou false

// const algumItemEPar = array.some(item => item % 2 === 0);
// Usando some para verificar se algum item atende a uma condição
// retorna true ou false

// const par = array.find(item => item % 2 === 0);
// Usando find para encontrar o primeiro item que atende a uma condição
// retorna o item encontrado ou undefined

// const par = array.findIndex(item => item % 2 === 0);
// Usando findIndex para encontrar o índice do primeiro item que atende a uma condição
// retorna o índice do item encontrado ou -1

const soma = array.reduce((acumulador, item) => acumulador + item, 0);
// Usando reduce para acumular valores em um único valor
// neste caso, somando todos os itens do array