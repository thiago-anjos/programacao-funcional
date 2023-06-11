// validar se uma função é uma promisse
// const typeOfPromisse = new Promise(() => {});
// Promise.resolve(typeOfPromisse) === typeOfPromisse;

function composition(...fns) {
    return function (value) {
        return fns.reduce(async (acc, fn) => {
            // O acc são as funções que estão sendo percorriddas dentro do reduce.
            if (Promise.resolve(acc) === acc) {
                return fn(await acc);
            } else {
                return fn(acc);
            }
        }, value);
    };
}

function screaming(text) {
    return text.toUpperCase();
}

function emphasis(text) {
    return `${text} !!!!`;
}

function splitWords(text) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.split('').join(' '));
        }, 3000);
    });
}

// vc pode salvar um tipo de composicao e depois passar o valor de forma tardia
const exaggerated = composition(screaming, emphasis, splitWords);
const normal = composition(emphasis);

exaggerated('Super Hero').then(console.log);
normal('Super Hero').then(console.log);
