// funcao impura
// sempre que uma função não retornor algo deterministico será uma funcao impura
// o valor de retorno não é determinado pelo seus valores de entrada.
function generateRandomNumber(min, max) {
    const factor = max - min + 1;
    return parseInt(Math.random() * factor) + min;
}

console.log(generateRandomNumber(5, 6));
