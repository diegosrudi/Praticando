// console.log("Olá, Mundo!");

// Tipos Primitivos
const numero = 5;
const numeroDecimal = 5.68464;
const texto = "Olá, Mundo!";
// const chave3 = "chave3";

// console.log(texto);

// Tipos de Referência
const array = [5, 25, "texto1", "texto2", [5, 97]]; // Espaço XYZ12, não está guardando os valores
// Temos uma casa na Rua XPTO n° 15
// O tipo de referência NÃO guarda o valor, mas sim o ENDEREÇO

const array2 = array; // Você não está copiando o valor, mas sim o ENDEREÇO
array2[0] = 13513; // Alterando o valor do array2, que também altera o array original

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

// console.log(object[chave3]);
