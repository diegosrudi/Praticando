// Objetos

const user = {
    name: 'Diego',
    idade: 38,
    address: {
        street: 'Rua teste',
        number: 176,
    },
};

document.body.innerText = JSON.stringify(Object.values(user));
// Output: ["Diego", 38, {"street":"Rua teste","number":176}]
// retorna um array com os valores do objeto
document.body.innerText = JSON.stringify(Object.entries(user));
// Output: [["name", "Diego"], ["idade", 38], ["address", {"street":"Rua teste","number":176}]]
// retorna um array com arrays dentro contendo [chave, valor]

// Desestruturação

const { address, idade : age } = user;
document.body.innerText = JSON.stringify({ address, age });
// Output: {"address":{"street":"Rua teste","number":176},"age":38}
// desestruturação do objeto user para pegar apenas address e idade

function mostraIdade({ idade }) {
    return idade;
}

// Rest operator

document.body.innerText = mostraIdade(user);
// Output: 38