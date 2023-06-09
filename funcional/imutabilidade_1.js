const nums = [3, 1, 7, 9, 4, 6];
console.log(nums);

function orderArray(array) {
    return array.sort();
}
// a funcao acima, quando usa o .sort() diretamente no array que recebe, modifica o array original, está errado
orderArray(nums);
console.log('array externo foi alterado', nums);

// o princípio da imutabilidade requer que não alteramos o array original

const nums2 = [30, 10, 70, 90, 40, 60];

function orderArrayImutable(array) {
    return [...array].sort();
}

const orders = orderArrayImutable(nums2);
console.log('array externo NAO foi alterado', nums2);
console.log('array ordernado ', orders);

// para previnir isso, podemos colocar um freeze no array para que outras pessoas que não seguem o padrão de imutabilidade
// não consigam alterar o array

const numsFreeze = Object.freeze([100, 5, 10, 7, 26, 8, 3]);
console.log('numsFreeze', numsFreeze);
// console.log('numsFreeze sort', numsFreeze.sort());  => Cannot assign to read only property '0' of object '[object Array]'
const numsOrdenados = [...numsFreeze].sort();
console.log(numsOrdenados);
