const _ = require('lodash');
const fs = require('fs');

let pokedex = JSON.parse(fs.readFileSync('./assets/db.json'));

const getFibonacciSequence = (nickname) => {
    let firstCalculationNumber
    let secondCalculationNumber
    let nextNumber
    const splitNickname = nickname.split('-')[0]
    const allNickname = pokedex.filter(child => child.nickname.includes(splitNickname));
    const fibonacciSequence = []
    allNickname.map((item) => {
        let itemSequence = item.nickname.split('-')[1]
        if (itemSequence == undefined) {
            itemSequence = '0'
        }
        fibonacciSequence.push(parseInt(itemSequence))
    })
    if (fibonacciSequence.length == 1) {
        nextNumber = 0;
        return nextNumber;
    }
    else if (fibonacciSequence.length == 2) {
        nextNumber = 1;
        return nextNumber;
    }
    else if (fibonacciSequence.length > 2) {
        console.log(fibonacciSequence)
        fibonacciSequence.sort((a, b) => a - b);
        firstCalculationNumber = fibonacciSequence[fibonacciSequence.length - 2];
        secondCalculationNumber = fibonacciSequence[fibonacciSequence.length - 1];
        nextNumber = firstCalculationNumber + secondCalculationNumber;
        return nextNumber
    }
}

module.exports = {
    getFibonacciSequence
}