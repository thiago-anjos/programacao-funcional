const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

const exibirConteudo = (err, data) => {
    console.log(data.toString());
};

console.log("==============================================================");

console.log("incio");
fs.readFile(caminho, {}, exibirConteudo);
console.log("fim");
console.log("==============================================================");
//assincrono
console.log("incio");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("fim");
console.log("==============================================================");
