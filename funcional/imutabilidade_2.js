const nuns = [5, 5, 5, 5, 1];

// #3 - Recursividade
function sum(arr, total = 0) {
    if (arr.length === 0) return total;
    const slice01 = arr.slice(1);
    const arrayPositionZero = arr[0];
    console.log('slice01', slice01);
    console.log('position 0', arrayPositionZero);
    console.log('total', total);
    sum(slice01, total + arrayPositionZero);
}

sum(nuns);

// #2 - Reduce que não altera o array original = fica um codigo mais funcional tambem vc diz o que tem que ser feito, somar e não como somar
// const sum = (a, b) => a + b;
// const total = nuns.reduce(sum);
// console.log(total);

// #1 = com dados mutáveis = declarativo vc explica ponto a ponto
// let total = 0;
// for (let i = 0; i < nuns.length; i++) {
//     total += nuns[i];
// }
// console.log(total);
