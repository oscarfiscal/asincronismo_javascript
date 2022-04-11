const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        const data1 = await fetchData(url_api);
        const character = await fetchData(`${API}${data1.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data1.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Bofer');
anotherFunction(API);
console.log('After');
