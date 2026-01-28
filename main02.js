// Short Syntax

// const name = 'Diego';
// const age = 23;

// const user = {
//     name,
//     age,
// };

// document.body.innerText = JSON.stringify(user);
// Output: {"name":"Diego","age":23}

// Optional Chaining

const user = {
    name: 'Diego',
    address: {
        street: 'Rua teste',
        number: 176,
        zip : {
            code: '12345-678',
            city: 'São Paulo',
        },
        showFullAddress() {
            return `Rua: ${this.street}, N°: ${this.number}, CEP: ${this.zip.code} - ${this.zip.city}`;
        }
    },
};

document.body.innerText = user.address.showFullAddress?.();
// Output: Rua: Rua teste, N°: 176, CEP: 12345-678 - São Paulo - caso a função exista
// caso a função não exista, o retorno será undefined
document.body.innerText = user.address?.zip?.code ?? 'Não informado';
// Output: 12345-678