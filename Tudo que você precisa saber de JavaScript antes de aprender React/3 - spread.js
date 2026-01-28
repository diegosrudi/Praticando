const array = [5, 25, "texto1", "texto2", [5, 97]];

const array2 = [...array]; // spread operator - espalha os valores do array original em um novo array
array2[0] = 13513;

console.log(array2);
console.log(array);

const object = {
  chave1: "valor1",
  chave2: 5,
  chave3: "valor3",
  chave4: [5, 97],
  chave5: {
    novaChave1: 5,
  },
};

export const object2 = { ...object }; // spread operator - espalha os valores do objeto original em um novo objeto
// o export é apenas para permitir a visualização do objeto no console do navegador ou em outro arquivo
object2.chave1 = "valor modificado";

console.log(object2);
