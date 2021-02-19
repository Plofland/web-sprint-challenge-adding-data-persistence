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
    //my POST request error is happening right here, projectData is coming in just fine
    .then(([id]) => {
      return db('projects').where('id', id).first();
    });
}
