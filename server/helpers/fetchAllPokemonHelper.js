const fetchAllPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
            throw new Error(`Failed to fetch Pokemon. Status: ${response.status}`);
        }
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    fetchAllPokemon
}
