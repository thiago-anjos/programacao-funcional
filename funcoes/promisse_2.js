// setTimeout(() => {
//     console.log("executando callback");
//     setTimeout(() => {
//         console.log("executando callback");
//     }, 2000);
// }, 2000);

function esperarPromisse(canGo) {
    return new Promise((resolve, reject) => {
        canGo === true ? resolve("sim") : reject("no");
    });
}

esperarPromisse(false)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

esperarPromisse(true)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
