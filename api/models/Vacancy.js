/**
* Vacancy.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    agency: {
      model: 'agency'
    },
    employer: {
      model: 'employer',
    },
    candidates: {
      collection: 'candidate',
      via: 'vacancys'
    },
    interviews: {
      collection: 'interview',
      via: 'vacancy'
    }
  }
};

