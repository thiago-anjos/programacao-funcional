const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "legendas");

function readAllFilesDirectory() {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, (err, files) => {
            if (err) reject("unable to scan directory", err);
            resolve(files);
        });
    });
}

const filesSrtExtensions = (files) => {
    return files.filter((file) => file.split(".")[1] === "srt");
};

const readFile = (files) => {
    const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
            fs.readFile(directoryPath + "/" + file, {}, (err, data) => {
                if (err) reject(err);
                resolve(data.toString());
            });
        });
    });
    return Promise.all(promises);
};

const cleanLines = (files) => {
    const regexFont = /<font\b[^>]*>(.*?)<\/font>/gi;
    const regex = /[a-zA-Z']+/gu;
    let wordsCount = {};

    files.forEach((file) => {
        file = file.replace(regexFont, "");
        const onlyWords = file.match(regex);

        onlyWords.forEach((word) => {
            word = word.toLowerCase();
            wordsCount[word] = (wordsCount[word] || 0) + 1;
        });
    });

    const sortedPairs = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);
    const sortedObj = Object.fromEntries(sortedPairs);

    return sortedObj;
};

module.exports = {
    readAllFilesDirectory,
    filesSrtExtensions,
    readFile,
    cleanLines,
};
