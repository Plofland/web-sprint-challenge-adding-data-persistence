// build your `Resource` model here
const db = require('../data/dbConfig');

module.exports = {
  find,
  add
};

function find() {
  return db('resources');
}

function add(resourceData) {
  return db('resources')
    .insert(resourceData)
    .then(([id]) => {
      return db('resources').where('id', id).first();
    });
}
