const Joi = require('joi');

const talkersData = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({
      'any.required': '400|O campo "name" é obrigatório',
      'string.base': '400|O "name" deve ser uma string',
      'string.min': '400|O "name" deve ter pelo menos 3 caracteres',
    }),

  age: Joi.number()
    .integer()
    .min(18)
    .required()
    .messages({
      'any.required': '400|O campo "age" é obrigatório',
      'number.base': '400|O "age" deve ser um número',
      'number.min': '400|A pessoa palestrante deve ser maior de idade',
    }),

  talk: Joi.object({
    watchedAt: Joi.string()
      .required()
      .messages({
        'any.required': '400|O campo "watchedAt" é obrigatório',
      }),

    rate: Joi.number()
      .min(1)
      .max(5)
      .required()
      .messages({
        'any.required': '400|O campo "rate" é obrigatório',
        'number.base': '400|O campo "rate" deve ser um número',
        'number.min': '400|O campo "rate" deve ser um inteiro de 1 à 5',
        'number.max': '400|O campo "rate" deve ser um inteiro de 1 à 5',
      }),
  })
    .required()
    .messages({
      'any.required': '400|O campo "talk" é obrigatório',
      'object.base': '400|O campo "talk" deve ser um objeto',
    }),
});

module.exports = talkersData;
