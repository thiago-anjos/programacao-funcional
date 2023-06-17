// esperar 3000
// gerar números de 500 em 500 ms
// depois de 10 segundos chamar o unsubscrible

const { timer, delay } = require('rxjs');

const obs = timer(3000, 500);

const sub1 = obs.subscribe((num) => {
    console.log('#1 gerou um numero: ' + num);
});

const sub2 = obs.subscribe((num) => {
    console.log('#2 gerou um numero: ' + num);
});

setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
}, 10000);
