const object = {
  chave1: "valor1",
  chave2: 5,
  chave3: "valor3",
  chave4: [5, 97],
  chave5: {
    novaChave1: 5,
  },
};

// const valorChave3 = object.chave3;
// const { valorChave3 } = object; // Estou pegando a chave com o nome "valorChave3" dentro do objeto chamado "object"
const { chave5, chave2 } = object;

console.log(chave5);

const array = [5, 25, "texto1", "texto2", [5, 97]];

const [valor1, valor2] = array;

console.log(valor2);
