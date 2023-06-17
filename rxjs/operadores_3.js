const { Observable } = require('rxjs');

function elementoscomDelay(time, ...elements) {
    return Observable.create((subscriber) => {
        (elements || []).forEach((element, index) => {
            setTimeout(() => {
                subscriber.next(element);
                if (elements.length === index + 1) {
                    subscriber.complete();
                }
            }, time * index);
            // console.log('element.length', elements.length);
            // console.log('index', index);
            // console.log('index + 1 é = ', index + 1);
        });
    });
}

elementoscomDelay(2000, 1, 2, 3, 4, 5).subscribe({
    next: (value) => console.log('valor: ', value),
    error: (err) => console.log('error: ', err),
    complete: () => console.log('complete'),
});
