const car = [
    {
        name: "pen",
        qtd: 10,
        price: 7.99,
        fragile: true,
        new: false,
    },
    {
        name: "erase",
        qtd: 5,
        price: 1.99,
        fragile: false,
        new: true,
    },
    {
        name: "pencil",
        qtd: 12,
        price: 5.99,
        fragile: true,
        new: false,
    },
    {
        name: "book",
        qtd: 100,
        price: 9.99,
        fragile: false,
        new: false,
    },
];

// 1 apenas elementos fragil true

const fragile = car.filter((item) => item.fragile === true);
console.log(fragile);

//2 quantidade e preço
const total = (item) => item.qtd * item.price;
const totalFragile = fragile.map(total);
console.log(totalFragile);

// 3 gerar a media dos elementos

const mediaMyWay = totalFragile.reduce(
    (acc, el, _, array) => (acc + el) / array.length
);
console.log("minha media", mediaMyWay);

const media = totalFragile.reduce(
    (acc, el, _, array) => {
        const novaQtd = acc.qtd + 1;
        const novoTotal = acc.total + el;
        return {
            qtd: novaQtd,
            total: novoTotal,
            media: novoTotal / novaQtd,
        };
    },
    {
        qtd: 0,
        total: 0,
        media: 0,
    }
);

console.log(media);
