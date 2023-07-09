const { map } = require('rxjs');
const fn = require('./funcoes');
const path = require('path');
const customPath = path.join(__dirname, 'legendas');

fn.readDirectory(customPath)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        map((data) => fn.lerArquivo(`${customPath}/${data}`)),
        map(fn.separarTextoPor('\n'))
    )
    .subscribe(console.log);
