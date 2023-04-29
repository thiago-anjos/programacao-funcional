let p = new Promise((cumprirPromessa) => cumprirPromessa(3));
let p2 = new Promise((cumprirPromessa) =>
    cumprirPromessa({
        x: "Oi",
        y: [1, 2, 3],
    })
);

console.log("typeof", typeof p); //object

p.then((valor) => {
    console.log(valor);
});

p2.then((valor) => {
    console.log(valor);
});
