function composition(...fns) {
    return function (value) {
        return fns.reduce((acc, fn) => {
            return fn(acc);
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
    return text.split('').join(' ');
}

// vc pode salvar um tipo de composicao e depois passar o valor de forma tardia
const exaggerated = composition(screaming, emphasis, splitWords);
const normal = composition(emphasis);

console.log(exaggerated('Super Hero'));
console.log(normal('Super Hero'));
