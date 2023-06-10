function composition(fn1, fn2) {
    return function (value) {
        return fn2(fn1(value));
    };
}

function fn1(value) {
    if (!value) throw new Error('Invalid value passed');
    console.log('estou na funcao 1');
    return {
        time: new Date(),
        message: value.toUpperCase(),
    };
}

function fn2(fn) {
    console.log('estou na funcao 2', fn);
    fn.passed = true;
    return fn;
}

const result = composition(fn1, fn2)('Mensagem');
console.log(result);
