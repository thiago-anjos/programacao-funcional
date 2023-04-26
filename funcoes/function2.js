// pass a function as parameter to another function and return another function

function goodMorning() {
    console.log("Good Morning");
}

function goodAfternoon() {
    console.log("Good Afternoon");
}

function executeAnything(fn) {
    console.log(typeof fn);
    if (typeof fn !== "function") return;
    fn();
}

executeAnything(3);
executeAnything(goodMorning);

// return a function from another function

function potency(base) {
    return function (exp) {
        return Math.pow(base, exp);
    };
}

const potencyOf2 = potency(2);
console.log("potencyOf2", potencyOf2);
console.log(potencyOf2(8));
