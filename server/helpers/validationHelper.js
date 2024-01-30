const Joi = require('joi');
const Boom = require('boom');

const pokemonDetailValidation = (data) => {
  const schema = Joi.object({
    pokemonName: Joi.string().optional().description('pokemon name; i.e. Snorlax'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const getPokedexValidation = (data) => {
  const schema = Joi.object({
    pokemonName: Joi.string().optional().description('pokemon name; i.e. Snorlax'),
    id: Joi.number().optional().description('id; i.e. 1'),
    nickname: Joi.string().optional().description('pokemon name; i.e. Snorlax'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const removePokemonValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().optional().description('id; i.e. 1'),
    nickname: Joi.string().optional().description('pokemon name; i.e. Snorlax'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const renamePokemonValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().optional().description('id; i.e. 1'),
    nickname: Joi.string().optional().description('pokemon name; i.e. Snorlax'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  pokemonDetailValidation, getPokedexValidation, removePokemonValidation, renamePokemonValidation
};
