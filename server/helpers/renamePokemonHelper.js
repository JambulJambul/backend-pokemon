const _ = require('lodash');
const fs = require('fs');
const fibonacciCalculator = require('./getFibonacciHelper')

let pokedex = JSON.parse(fs.readFileSync('./assets/db.json'));

const renamePokemon = async (dataObject) => {
    const { id, nickname } = dataObject;
    try {
        if (id) {
            pokedex.map((item) => {
                if (item.id == id) {
                    const fibonacciNumber = fibonacciCalculator.getFibonacciSequence(nickname)
                    if (fibonacciNumber != undefined) {
                        item.nickname = nickname + "-" + fibonacciNumber || item.nickname;
                    } else {
                        item.nickname = nickname || item.nickname;
                    }
                }
            })
            fs.writeFileSync('./assets/db.json', JSON.stringify(pokedex))
            return Promise.resolve("Your pokemon has been renamed!");
        } else {
            return Promise.resolve("Please insert the correct information!");
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    renamePokemon
}