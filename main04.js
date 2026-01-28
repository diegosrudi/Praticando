// Template Literals - placeholders e expressões

const name = 'Diego'
const message = `Hello, ${name ? name : 'visitante'}! Welcome to the JavaScript world.`
document.body.innerText = message;
// Usando Template Literals com placeholder e expressão condicional - retorna "Hello, Diego! Welcome to the JavaScript world."

// Se a variável name fosse uma string vazia, retornaria "Hello, visitante! Welcome to the JavaScript world."

// Promises

// .then() e .catch()

// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// };

// somaDoisNumeros(3, 5)
//     .then(soma => {
//         document.body.innerText += `\nA soma é: ${soma}`;
    
//     })
//     .catch(error => {
//         document.body.innerText += `\nErro: ${error}`;
//     });
// Output: A soma é: 8 (após 2 segundos)
// then e catch são usados para lidar com o resultado ou erro da Promise.
// a promise simula uma operação assíncrona que soma dois números após 2 segundos.

//Mundo real

fetch('https://api.github.com/users/diego3g')
    .then(response => {
        return response.json()
    })
    .then(body => {
        console.log(body)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log('Requisição finalizada')
    })
    // mesmo código usando dois then encadeados
    // .then(response => {
    //     response.json().then(body => {
    //         console.log(body)
    //     })
    // })
    // .catch(error => {
    //     console.log(error)
    
    // })

    // escrevendo da mesmma forma com função async/await

    async function fetchGitHubUser() {
        try {
        const response = await fetch('https://api.github.com/users/diego3g')
        const body = await response.json()
        console.log(body)
        } catch (error) {
        console.log(error)
        } finally {
        console.log('Requisição finalizada')
        }
    }

    fetchGitHubUser().then(name => {
        console.log(name)
    })

    // retorna os dados do usuário Diego3g do GitHub, ou um erro se a requisição falhar.