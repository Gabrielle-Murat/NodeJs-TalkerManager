const Joi = require('joi');

const loginData = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    .required()
    .messages({
      'any.required': '400|O campo "email" é obrigatório',
      'string.base': '400|O "email" deve ser uma string',
      'string.email': '400|O "email" deve ter o formato "email@email.com"',
    }),
  
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'any.required': '400|O campo "password" é obrigatório',
      'string.base': '400|O "password" deve ser uma string',
      'string.min': '400|O "password" deve ter pelo menos 6 caracteres',
    }),
});

module.exports = loginData;
