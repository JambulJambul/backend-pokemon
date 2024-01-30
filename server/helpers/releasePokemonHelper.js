const _ = require('lodash');
const fs = require('fs');

const isPrimeNumber = (number) => {
    if (number < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const releasePokemon = async (dataObject) => {
    const { id, nickname } = dataObject;
    try {
        let playerList = JSON.parse(fs.readFileSync('./assets/db.json'));
        const randomChance = Math.floor(Math.random() * 100);
        const primeNumberBool = isPrimeNumber(randomChance);
        if (primeNumberBool) {
            if (id) {
                const pokedex = playerList.filter(child => child.id != id);
                fs.writeFileSync('./assets/db.json', JSON.stringify(pokedex));
                const message = "Pokemon has been released!";
                return Promise.resolve(message, pokedex);
            }
            else if (nickname) {
                const pokedex = playerList.filter(child => child.nickname != nickname);
                fs.writeFileSync('./assets/db.json', JSON.stringify(pokedex));
                const message = "Pokemon has been released!";
                return Promise.resolve(message, pokedex);
            }
        } else {
            return Promise.resolve("You have failed to release Pokemon!");
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    releasePokemon
}
