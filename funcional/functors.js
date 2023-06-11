// Como se fosse um container, um wrapper ...

// const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(typeof nums);
// object;

// o Map não altera o array original

//array é um exemplo de functor
// const newNuns = nuns.map((el) => el + 10).map((el) => el * 3);
// console.log('nuns', nuns);
// console.log('newNuns', newNuns);

function secureType(value) {
    return {
        value,
        invalid() {
            return this.value === null || this.value === undefined;
        },
        map(fn) {
            if (this.invalid()) {
                return secureType(null);
            } else {
                const newValue = fn(this.value);
                return secureType(newValue);
            }
        },
    };
}

const result = secureType('Esse é um texto').map((el) => el.toUpperCase());
console.log(result.value);
