// function fn1() {
//   fn2();
// }
// function fn2() {
//   fn3();
// }
// function fn3() {
//   setTimeout(() => {
//     console.log("settimout");
//   }, 3000);
//   console.log("fn3");
// }

// function main() {
//   fn1();
// }

// main();
// console.log("fim");

function waitFor(time) {
  const future = Date.now() + time;
  while (Date.now() < future) {}
}

waitFor(5000);
console.log("fim");
