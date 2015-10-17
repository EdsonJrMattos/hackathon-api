/**
* Agency.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    vacancys:{
      collection: 'vacancy',
      via: 'agency'
    },

    candidates: {
      collection: 'candidate',
      via: 'agency'
    }
  }
};

