const { Observable } = require('rxjs');

const obs = Observable.create((subscriber) => {
    subscriber.next('RXJS');
    subscriber.next('é massa...');

    if (Math.random() > 0.5) {
        subscriber.complete();
    } else {
        subscriber.error('Que problema????');
    }
});

// obs.subscribe(
//     (valor) => console.log(`Função que retorna o sucesso valor ${valor}`),
//     (err) => console.log('Erro:', err),
//     () => console.log('fim')
// );

obs.subscribe({
    next(value) {
        console.log('valor:', value);
    },
    error(err) {
        console.log('Erro:', err);
    },
    complete() {
        console.log('fim:');
    },
});
