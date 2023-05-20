const path = require('path');
const fn = require('./functions_professor');

const customPath = path.join(__dirname, 'legendas');

const symbols = [
    '.',
    '?',
    '-',
    ',',
    '"',
    '♪',
    '_',
    '<i>',
    '</i>',
    '\r',
    '[',
    ']',
    '(',
    ')',
];

const uniteContext = (content) => content.join('');
const allContent = (content) => content.split('\n');
const splitWords = (content) => content.split(' ');

const files = fn
    .readDirectory(path, customPath)
    .then(fn.filesExtension('.srt'))
    .then(fn.readFiles)
    .then(uniteContext)
    .then(allContent)
    .then(fn.removeEmptyString)
    .then(fn.removeTimeOnLines('-->'))
    .then(fn.removeLinesNumbers)
    .then(fn.removeSymbols)
    .then((value) => console.log(value));
