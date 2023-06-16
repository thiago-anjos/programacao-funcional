const { Observable } = require('rxjs');

const promisse = new Promise((resolve) => {
    resolve('Promisse é bem legal');
    resolve('Promisse é bem legal');
    resolve('Promisse é bem legal');
});

promisse.then(console.log);

// A diferençã é que vc consegue gerar vários dados chamando o .next()

const obs = new Observable((subscriber) => {
    subscriber.next('Observer é bem legal');
    subscriber.next('Observer ');
    subscriber.next('Observer é');
    subscriber.next('Observer é bem');
    setTimeout(() => {
        subscriber.next('Observer é bem legal');
        // finalizar o observable
        subscriber.complete();
    }, 1000);
});

obs.subscribe(console.log);
obs.subscribe((texto) => {
    console.log(texto.toUpperCase());
});
