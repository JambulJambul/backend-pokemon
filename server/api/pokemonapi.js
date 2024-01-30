const Router = require('express').Router();

const Validation = require('../helpers/validationHelper');
const fetchAllPokemonHelper = require('../helpers/fetchAllPokemonHelper');
const fetchPokemonDetailHelper = require('../helpers/fetchPokemonDetailHelper');
const releasePokemonHelper = require('../helpers/releasePokemonHelper');
const pokedexHelper = require('../helpers/pokedexHelper');
const GeneralHelper = require('../helpers/generalHelper');
const renamePokemonHelper = require('../helpers/renamePokemonHelper');

const fetchAllPokemon = async (_request, reply) => {
    try {
        const response = await fetchAllPokemonHelper.fetchAllPokemon();
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const fetchPokemonDetail = async (request, reply) => {
    try {
        Validation.pokemonDetailValidation(request.params)
        const { pokemonName } = request.params;
        const response = await fetchPokemonDetailHelper.fetchPokemonDetail({ pokemonName });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const getPokedex = async (request, reply) => {
    try {
        Validation.getPokedexValidation(request.query)
        const { pokemonName, id, nickname } = request.query;
        const response = await pokedexHelper.getPokedex({ pokemonName, id, nickname });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const releasePokemon = async (request, reply) => {
    try {
        Validation.removePokemonValidation(request.query)
        const { id, nickname } = request.query;
        const response = await releasePokemonHelper.releasePokemon({ id, nickname });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const renamePokemon = async (request, reply) => {
    try {
        Validation.renamePokemonValidation(request.body)
        const { id, nickname } = request.body;
        const response = await renamePokemonHelper.renamePokemon({ id, nickname });
        return reply.send(response);
    } catch (err) {
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

Router.get('/', fetchAllPokemon);
Router.get('/pokedex', getPokedex)
Router.post('/catchpokemon/:pokemonName', fetchPokemonDetail)
Router.delete('/releasepokemon', releasePokemon)
Router.patch('/renamePokemon', renamePokemon)

module.exports = Router;