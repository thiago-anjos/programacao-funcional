// currying é quando vc passa os parametros de forma parcial para uma função.

//função sem o uso de currying
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

// função com o uso do currying
// passando os parametros de forma parcial
function sumC(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(sumC(1)(2)(3));

function textWithSizeBetween(min, max, error, text) {
    const size = (text || '').trim().length;
    if (size < min || size > max) {
        throw error;
    }
}

const product = { name: 'pen', price: 15, desc: 0.25 };

textWithSizeBetween(5, 100, 'Nome muito pequeno', product.name);
