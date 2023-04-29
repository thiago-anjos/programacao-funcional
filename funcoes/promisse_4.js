function randomNumbers() {
    return new Promise((resolve, reject) => {
        const number = Math.floor(Math.random() * 20);
        number >= 5 ? resolve(number) : reject("Menor que 5: " + number);
    });
}

function lotOfRandomNumbers() {
    return Promise.allSettled([
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
    ]);
}

lotOfRandomNumbers()
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
