const { Observable, of, map } = require('rxjs');

function terminadoCom(sobrenome) {
    return (source) => {
        return Observable.create((subscriber) => {
            source.subscribe({
                next(v) {
                    v = v.toLowerCase();
                    if (v.endsWith(sobrenome)) {
                        subscriber.next(v);
                    }
                },
            });
        });
    };
}

of('Ana Silva', 'Beth', 'Bob Silva', 'Luke')
    .pipe(terminadoCom('silva'))
    .subscribe(console.log);
