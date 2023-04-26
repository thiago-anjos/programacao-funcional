// // do professor
// function somar(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }

// console.log("somar", somar(13)(10)(10));

// // sum with 3 parameters
// function sum(...x) {
//     const total = x.reduce((a, b) => a + b);
//     console.log(total);
//     return total;
// }

// sum(10, 20, 30);

// // calculate values

// function calculate(a, b, fn) {
//     return fn(a, b);
// }

// function sum(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// function sub(a, b) {
//     console.log(a - b);
//     return a - b;
// }

// calculate(3, 4, sum);
// calculate(10, 4, sub);

function mathTest(x) {
    return function (y) {
        return function (fn) {
            console.log(fn(x, y));
            return fn(x, y);
        };
    };
}

function sub(a, b) {
    return a - b;
}

mathTest(10)(1)(sub);
