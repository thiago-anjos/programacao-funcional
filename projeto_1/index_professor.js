const path = require("path");
const fn = require("./functions_professor");

const customPath = path.join(__dirname, "legendas");

const files = fn
    .readDirectory(path, customPath)
    .then((files) => fn.filesExtension(files, "srt"))
    .then((files) => fn.readFiles(files))
    .then((contents) => contents.join(""))
    .then((allContent) => allContent.split("\n"))
    .then(fn.removeEmptyString)
    .then(fn.removeTimeOnLines("-->"))
    .then(fn.removeLinesNumbers)
    .then((value) => console.log(value));
