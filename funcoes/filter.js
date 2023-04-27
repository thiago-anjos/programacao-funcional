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

const getNome = (item) => item.name;
const priceAboveFive = (item) => item.price > 5;
console.log(car.filter(priceAboveFive));
console.log(car.filter(priceAboveFive).map(getNome));
