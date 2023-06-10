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

// const result = textWithSizeBetween(4)(10)('Nome do produto muito pequeno')(
//     product.name
// );
//console.log(result);

// É possível criar funções parciais baseado na funcao 'textWithSizeBetween' que utiliza o conceito de currying
// da seguinte maneira

//defino uma função com nome 'defaultSizeMinAndMax' que utiliza de forma parcial a minha função 'textWithSizeBetween'
// forçando parâmetros padrões
const defaultSizeMinAndMax = textWithSizeBetween(4)(255);

//defino uma função com o nome 'defaultMessageErro' forçando minha mensagem de erro padrão
const defaultMessageError = defaultSizeMinAndMax(
    'Nome do produto muito pequeno defaultMessageError'
);

const result2 = defaultMessageError(product.name);
console.log(result2);
