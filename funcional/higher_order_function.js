// funcoes que operam em outras funcoes
// tomando-as como argumentos ou retornando-as
// são chamadas de higher order function

function exec(fn, ...params) {
    return function (space) {
        const spaceInsert = space ? ' ' : '';
        return function (text) {
            return text + spaceInsert + fn(...params);
        };
    };
}

function sum(a, b, c) {
    return a + b + c;
}

function multiply(a, b) {
    return a * b;
}

const resultSum = exec(sum, 4, 5, 6)(true)('O valor da soma é:');
const resultMulti = exec(multiply, 4, 5)(false)('O valor da multiplicação é:');

console.log(resultSum, resultMulti);

//
