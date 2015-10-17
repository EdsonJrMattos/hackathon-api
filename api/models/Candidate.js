/**
* Candidate.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    agency: {
      collection: 'agency',
      via: 'candidates'
    },
    vacancys: {
      collection: 'vacancy',
      via: 'candidates'
    },
    interviews: {
      collection: 'interview',
      via: 'candidates'
    },
    notes: {
      collection: 'note',
      via: 'candidate'
    },
    competences: {
      collection: 'competence',
      via: 'candidate'
    }
  }
};

