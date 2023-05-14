const fn = require("./functions");

fn.readAllFilesDirectory()
    .then(fn.filesSrtExtensions)
    .then(fn.readFile)
    .then(fn.cleanLines)
    .then((value) => console.log(value));
