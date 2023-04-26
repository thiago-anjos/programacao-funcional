function exec(fn, a, b) {
    return fn(a, b);
}

function somarNoTerminal(a, b) {
    return console.log(a + b);
}

exec(somarNoTerminal, 56, 38);

const fn = () => console.log("Exec....");

//setInterval(() => fn(), 1000);
