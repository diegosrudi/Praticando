// camelCase
// PascalCase

// function consoleLogOi(parametro1, parametro2) {
//   // Tudo que vou fazer dentro dessa função
//   console.log("Oi");

//   // return // Posso ou não retornar uma informação
//   return "Oi de novo";
// }

const consoleLogOi = (parametro1, parametro2) => {
  console.log("Oi");

  return "Oi de novo";
};
consoleLogOi(); // Chamar a função

const segundaFuncao = () => console.log("Segunda função"); // Retorno implícito

const retornoDaFuncao = consoleLogOi();
console.log(retornoDaFuncao);

segundaFuncao(); // Chamar a função

// ES6 Arrow Function

const ireland = ['Dublin', 'Cork', 'Galway'];

const love = ireland.map(function(name) {
  return `I love ${name}`;
})

const loveArrow = ireland.map((name) => {
  return `I love ${name}!`;
})

const loveArrowSingle = ireland.map(name => { return `I love ${name}!`;
})

const loveArrowOneLine =  ireland.map(name => `I love ${name}!`); // Retorno implícito

const loveChain = ireland
  .filter(name => name === 'Dublin')
  .map(name => `I love ${name}!`);

console.log(loveChain);

// this

const sandwish = {
  bread: 'pão integral',
  meat: 'frango',

  prepare: function() {
    return `${this.bread} com ${this.meat}`;
  }
}

make: function() {
  windows.setTimeout(() => {
    console.log(this.prepare());
  }, 1000);
}

make();

// o this em arrow function é léxico, ou seja, ele herda o this do contexto onde a função foi criada

