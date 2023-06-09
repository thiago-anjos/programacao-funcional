// create an literal object
const person = {
    name: 'maria',
    height: '100',
    age: '20',
    city: ' York',
    address: {
        stret: 'Avenue',
    },
};

// atribuição por referencia
const newPerson = person;

newPerson.name = 'lum';
newPerson.city = ' York 2';

//console.log(person);
// { name: 'lum', height: '100', age: '20', city: ' York 2' }

// passagem por referencia
const newPerson2 = person;
function changePerson(newPerson2) {
    newPerson2.name = 'jones';
    newPerson2.city = 'san Francisco';
}

changePerson(person);
//console.log(person);
//{ name: 'jones', height: '100', age: '20', city: 'san Francisco' }

// ainda sim está acontecendo a alteração do objeto literal, ou seja, não está acontecendo a imutabilidade

// para resolver isso temos que altear nossa funcao para que ela clone o objeto que ela recebe

const dog = {
    name: 'Dog',
    age: 34,
    specie: {
        type: 'integer',
    },
};

function changeDogImutable(dog) {
    const newDog = { ...dog }; // este tipo de clone não pega o specie.type porque é um clone shallow e se eu modificar algo aqui, vai moficiar no objeto dog fora da funcao
    newDog.name = 'jones';
    newDog.age = 200;
    newDog.specie.type = 'string';
    return newDog;
}
const dogChanged = changeDogImutable(dog);
// console.log(dogChanged);
//{ name: 'jones', age: 200, specie: { type: 'integer' } }

// console.log(dog);
//{ name: 'Dog', age: 34, specie: { type: 'integer' } }

// =================================================================

const financial = {
    money: true,
    type: 'digital',
    bank: {
        account: 'Bank',
        code: 0,
        amount: 0,
    },
};

function changeFinancialDeepClone(financial) {
    let newDogCloned = { ...dog };
    newDogCloned = {
        ...newDogCloned,
        type: 'cash',
        bank: {
            code: 1,
        },
    };
    return newDogCloned;
}
changeFinancialDeepClone(financial);
// console.log(financial);
// {
//   money: true,
//   type: 'digital',
//   bank: { account: 'Bank', code: 0, amount: 0 }
// }

//  =================================================================
// atribuição por valor

let a = 3;
let b = a; // atrituição por valor

a++;
b--;

console.log('a', a); //mantem o valor de a certo
//a 4
console.log('b', b); // mantem o valor de b certo
//b 2

// SEMPRE QUE FOR TRABALHAR COM DADOS DE REFERENCIA, OBJETOS E ARRAYS, TRABALHE ELES DE FORMA IMUTÁVEL
// BOA PRÁTICA É SEMPRE CRIAR SEU OBJETO QUE NÃO PODE SER MODIFICAR... É CRIAR ELE COM Object.freeze

const car = Object.freeze({
    name: 'Car',
    model: 'sandero',
    type: 'flex',
    turbo: Object.freeze({
        diesel: true,
        ethanol: false,
    }),
});
