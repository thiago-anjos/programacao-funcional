const { Observable, from } = require('rxjs');

function createPipeableOperator(nextFn) {
    return function (source) {
        return Observable.create((subscriber) => {
            source.subscribe({
                next(v) {
                    nextFn(subscriber, v);
                },
            });
        });
    };
}

function primeiro() {
    return createPipeableOperator((subscriber, v) => {
        subscriber.next(v + 100);
        subscriber.complete();
    });
}

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(primeiro()).subscribe(console.log);
