const _ = require('lodash');
const fs = require('fs')

const getPokedex = async (dataObject) => {
    const { pokemonName, id, nickname } = dataObject;
    try {
        let pokedex = JSON.parse(fs.readFileSync('./assets/db.json'));
        if (!_.isEmpty(pokemonName)) {
            pokedex = _.filter(pokedex, (item) => item.pokemonName.toLowerCase() === pokemonName.toLowerCase());
        }
        if (!_.isEmpty(nickname)) {
            pokedex = _.filter(pokedex, (item) => item.nickname.toLowerCase() === nickname.toLowerCase());
        }
        if (!_.isEmpty(id)) {
            pokedex = _.filter(pokedex, (item) => item.id === parseInt(id));
        }
        return Promise.resolve(pokedex);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPokedex
}
