const fs = require("fs");
const path = require("path");

const pathFile = path.join(__dirname, "dados.txt");
const pathFile2 = path.join(__dirname, "dados1.txt");

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {}, (err, data) => {
            if (data) resolve(data.toString());
            if (err) reject(err);
        });
    });
}

readFile(pathFile)
    .then((value) => console.log(value))
    .catch((err) => console.log(err));

readFile(pathFile2)
    .then((value) => console.log(value))
    .catch((err) => console.error("CATCH ERROR", err));
