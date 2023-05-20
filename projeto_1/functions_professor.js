const fs = require('fs');

function readDirectory(path, customPath) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(customPath);
            files = files.map((file) => path.join(customPath, file));
            resolve(files);
        } catch (error) {
            reject(error);
        }
    });
}

function readFile(customPath) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(customPath, { encoding: 'utf8' });
            resolve(content);
        } catch (error) {
            reject(error);
        }
    });
}

function readFiles(paths) {
    return Promise.all(paths.map((path) => readFile(path)));
}

function filesExtension(extension) {
    return (array) => {
        const filtered = array.filter((file) => file.endsWith(extension));
        return filtered;
    };
}

function removeEmptyString(array) {
    return array.filter((el) => el.trim());
}

function removeTimeOnLines(defaultText) {
    return function (array) {
        return array.filter((el) => !el.includes(defaultText));
    };
}

function removeLinesNumbers(array) {
    const patternOnlyNumbers = /[0-9]/g;
    return array.map((el) => el.replace(patternOnlyNumbers, ''));
}

function removeSymbols(array) {
    return array.map((Element) => extractText(Element));
}

module.exports = {
    readDirectory,
    filesExtension,
    readFile,
    readFiles,
    removeEmptyString,
    removeTimeOnLines,
    removeLinesNumbers,
    removeSymbols,
};
