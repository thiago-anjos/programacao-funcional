const { Observable, from } = require('rxjs');

function primeiro() {
    return (source) => {
        return Observable.create((subscriber) => {
            source.subscribe({
                next(v) {
                    subscriber.next(v);
                    subscriber.complete();
                },
            });
        });
    };
}

function ultimo() {
    return (source) => {
        return Observable.create((subscriber) => {
            let ultimo;
            source.subscribe({
                next(v) {
                    ultimo = v;
                },
                complete() {
                    if (ultimo !== undefined) {
                        subscriber.next(ultimo);
                    }
                    subscriber.complete();
                },
            });
        });
    };
}

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(primeiro()).subscribe(console.log);

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(ultimo()).subscribe(console.log);
