// currying é quando vc passa os parametros de forma parcial para uma função.
function textWithSizeBetween(min) {
    return function (max) {
        return function (error) {
            return function (text) {
                //lazy Evaluation
                const size = (text || '').trim().length;
                if (size < min || size > max) {
                    throw error;
                }
            };
        };
    };
}

const product = { name: 'pen', price: 15, desc: 0.25 };

function evaluateProduct(fn) {
    return function (value) {
        // Lazy evaluation
        try {
            fn(value);
        } catch (error) {
            return { error };
        }
    };
}

const defaultSizeMinAndMax = textWithSizeBetween(4)(255);
const defaultMessageError = defaultSizeMinAndMax('Nome inválido');
//console.log(defaultMessageError(product.name));

console.log(evaluateProduct(defaultMessageError)(product.name));
