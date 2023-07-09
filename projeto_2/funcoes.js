const fs = require('fs');
const { Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create((subscriber) => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || ((e) => subscriber.error(e)),
                complete: sub.complete || ((e) => subscriber.complete(e)),
            });
        });
    };
}

function readDirectory(path) {
    return new Observable((subscriber) => {
        try {
            fs.readdirSync(path).forEach((file) => {
                subscriber.next(file);
            });
            subscriber.complete();
        } catch (error) {
            subscriber.error(error);
        }
    });
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator((subscriber) => ({
        next(text) {
            if (text.endsWith(padraoTextual)) {
                subscriber.next(text);
            }
        },
    }));
}

function lerArquivo(caminho) {
    try {
        return fs.readFileSync(caminho, { encoding: 'utf8' });
    } catch (error) {
        console.log(error);
    }
}

function separarTextoPor(simbolo) {
    console.log('simbolo', simbolo);
    return function (texto) {
        console.log('texto', texto);
        return texto.split(simbolo);
    };
}

module.exports = {
    readDirectory,
    elementosTerminadosCom,
    lerArquivo,
    separarTextoPor,
};
