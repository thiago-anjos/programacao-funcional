// Diz se que uma linguagem de programacao possui funcoes de primeira classe quando funcoes
// nessa linguagem são tratadas como qualquer outra variavel

const x = 3;

const y = function (txt) {
    return `Este é o texto: ${txt}`;
};

console.log(x);
// armazenamos a função dentro de uma variável
console.log(y('Olá'));

// HOF E FIRST CLASS SÃO 2 CONCEITOS FUNDAMENTAIS PARA DEFINIR QUANDO UMA LINGUAGEM É FUNCIONAL
