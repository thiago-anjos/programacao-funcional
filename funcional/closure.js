// é quando uma função lembra do seu escopo lexico mesmo quando a função é executada fora desse escopo lexico
// escopo lexico é onde a função foi definida originalmente

const sum = require('./closure_escope');

const x = 10; // não vai pegar esse X mas sim o X do arquivo closure_escope

console.log(sum());
// 6
