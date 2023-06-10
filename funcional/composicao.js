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

const result = composition(screaming, emphasis, splitWords)('Super Hero');

console.log(result);
