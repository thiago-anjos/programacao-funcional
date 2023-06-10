function eager(a, b) {
    //heavy processing
    const final = Date.now() + 2500;
    while (Date.now() < final) {}

    const value = Math.pow(a, 3);
    return value + b;
}

console.time('#1');
console.log('eager', eager(3, 100));
console.log('eager', eager(3, 200));
console.log('eager', eager(3, 300));
console.timeEnd('#1');
//#1: 7.507s

function lazy(a) {
    //heavy processing
    const final = Date.now() + 2500;
    while (Date.now() < final) {}
    const value = Math.pow(a, 3);
    return function (b) {
        return value + b;
    };
}

console.time('#2');
const lazy3 = lazy(3);
console.log('lazy', lazy3(100));
console.log('lazy', lazy3(200));
console.log('lazy', lazy3(300));
console.timeEnd('#2');
//#2: 2.500s
