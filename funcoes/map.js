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

const onlyNames = car.map((item) => item.name);
console.log(onlyNames);

const getNames = (item) => item.name;
console.log(car.map(getNames));

const valuesOf = car.map((item) => item.price * item.qtd);
console.log(valuesOf);
