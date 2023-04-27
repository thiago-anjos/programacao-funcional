const car = [
    {
        name: "pen",
        qtd: 10,
        price: 7.99,
    },
    {
        name: "erase",
        qtd: 5,
        price: 1.99,
    },
    {
        name: "pencil",
        qtd: 12,
        price: 5.99,
    },
    {
        name: "book",
        qtd: 100,
        price: 9.99,
    },
];

const getTotal = (item) => item.qtd * item.price;
const total = car.map(getTotal);
console.log(total);

const sum = (acc, elem) => acc + (elem - 10);
console.log("reduce", total.reduce(sum));
console.log("reduce", total.reduce(sum, 1000));
