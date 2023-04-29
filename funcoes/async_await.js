function waitFor(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(100);
        }, time);
    });
}

/*
o async await é para ser usado para esperar uma promisse retornar
ele consegue transformar chamadas assincronas como se fossem sincronas porque vc pode esperar uma promisse se resolver antes de avançar para as proximas
mas para isso a função precisa ser marcada com o async para dentro dela esperar uma promise com um await.
*/

async function returnFastValue() {
    const result = await waitFor(1000);
    return result;
}

async function executeValues() {
    let value = await returnFastValue();

    await waitFor(5000);
    console.log(`Async/Await ${value}...`);

    await waitFor(3000);
    console.log(`Async/Await ${value + 1}...`);
}

executeValues();
