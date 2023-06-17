// operadores de criação
// operadores encadeaveis (pipeable) um cano

const axios = require('axios');
const { from, map, concatAll } = require('rxjs');

let url = 'https://api.github.com/users/cod3rcursos/repos';

const observable = from(axios.get(url)).pipe(
    map((response) => response.data),
    concatAll(),
    map((repo) => repo.full_name)
);

observable.subscribe({
    next: (data) => {
        console.log(data);
    },
    error: (error) => {
        console.error(error);
    },
    complete: () => {
        console.log('Requisição completa.');
    },
});
