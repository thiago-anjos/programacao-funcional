// arrow function
const message = () => console.log("message");
message();

const greet = (name) => console.log(`Fala ${name}`);
greet("lindomar");

const somar = (...numeros) => {
    // let total = 0;
    // for (let n of numeros) {
    //     total += n;
    // }
    // return total;
    console.log(Array.isArray(numeros));
    return numeros.reduce((acc1, acc2) => acc1 + acc2);
};

console.log(somar(10, 20, 30, 40, 50));
