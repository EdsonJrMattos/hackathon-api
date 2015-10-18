/**
* Employer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: 'string',
    email: 'string',
    cpf: 'string',
    rg: 'string',
    phone: 'string',
    city: 'string',
    neighborhood: 'string',
    vacancys: {
      collection: 'vacancy',
      via: 'employer'
    },
    notes: {
      collection: 'note',
      via: 'employer'
    }
  }
};
