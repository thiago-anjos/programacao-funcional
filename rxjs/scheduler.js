const { from, asapScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

// sincronously;
// console.log('antes');
// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]).subscribe(
//     console.log
// );
// console.log('depois');

//asincronously
console.log('antes');
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    .pipe(observeOn(asapScheduler))
    .subscribe(console.log);
console.log('depois');
