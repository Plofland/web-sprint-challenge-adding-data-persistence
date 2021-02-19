const db = require('../../data/dbConfig');

module.exports = {
  find,
  add
};

function find() {
  return db('projects');
}

function add(projectData) {
  return db('projects')
    .insert(projectData)
    .then(([id]) => {
      return db('projects').where('id', id).first();
    });
}