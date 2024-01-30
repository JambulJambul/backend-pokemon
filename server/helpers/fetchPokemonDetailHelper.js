const fs = require('fs')
const fibonacciCalculator = require('./getFibonacciHelper')

const catchPokemon = (pokemonName) => {
    let pokedex = JSON.parse(fs.readFileSync('./assets/db.json'));
    const lastId = pokedex?.[pokedex.length - 1]?.id || 0;
    const randomChance = Math.random()
    if (randomChance < 0.5) {
        let newPokemon = {
            id: lastId + 1,
            pokemonName: pokemonName,
            nickname: pokemonName
        }
        let pokemonIsExist = false;
        pokedex.map((item) => {
            if (item.pokemonName == pokemonName) {
                pokemonIsExist = true
            }
        })
        if (pokemonIsExist == false) {
            pokedex.push(newPokemon);
            fs.writeFileSync("./assets/db.json", JSON.stringify(pokedex));
            return `${newPokemon.id}: ${newPokemon.pokemonName} was caught!`
        } else {
            pokedex.map((item) => {
                if (item.nickname == pokemonName) {
                    const fibonacciNumber = fibonacciCalculator.getFibonacciSequence(item.nickname)
                    if (fibonacciNumber != undefined) {
                        newPokemon = {
                            id: lastId + 1,
                            pokemonName: pokemonName,
                            nickname: item.nickname + "-" + fibonacciNumber
                        }
                    }
                }
            })
            pokedex.push(newPokemon);
            fs.writeFileSync("./assets/db.json", JSON.stringify(pokedex));
            return `${newPokemon.id}: ${newPokemon.pokemonName} was caught & already exist!`
        }
    } else {
        return "You have failed to capture the pokemon!"
    }

}

const fetchPokemonDetail = async (dataObject) => {
    const { pokemonName } = dataObject;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Pokemon. Status: ${response.status}`);
        }
        const message = catchPokemon(pokemonName)
        return Promise.resolve(message);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    fetchPokemonDetail
}
