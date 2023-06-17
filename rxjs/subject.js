const { Observable, Subject } = require('rxjs');

function randon() {
    return Math.floor(Math.random() * 100);
}

function getObservable() {
    return new Observable((subscriber) => {
        setTimeout(() => {
            console.log('#exercise 1 //////////////////');
            subscriber.next(randon());
            subscriber.complete();
        }, 1000);
    });
}

const obs = getObservable();
obs.subscribe(console.log);
obs.subscribe(console.log);

function getSubject() {
    const sub = new Subject();
    setTimeout(() => {
        console.log('#exercise 2 ================');
        sub.next(randon());
        sub.complete();
    }, 1000);
    return sub;
}

const subj = getSubject();
subj.subscribe(console.log);
subj.subscribe(console.log);
