// function declarations x function expression

// function declaration
function goodMorning(person) {
    const message = `Good morning ${person}`;
    console.log(message);
}

goodMorning("Thiago");

//function expression
const goodAfternoon = function () {
    console.log("Very Good afternoon");
};

goodAfternoon();

// ====
