// operadores de criação
// operadores encadeaveis (pipeable) um cano

const { of, from } = require('rxjs');
const { last, map } = require('rxjs/operators');

of(1, 2, 'ana', false, 'ultimo')
    .pipe(last())
    .subscribe((value) => console.log('o valor gerado foi: ', value));

from([1, 2, 'ana', false, 'ultimo'])
    .pipe(
        last(),
        map((v) => v[0])
    )
    .subscribe((value) => console.log('o valor 2 gerado foi: ', value));
