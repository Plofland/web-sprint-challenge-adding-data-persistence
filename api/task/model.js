const db = require('../../data/dbConfig');

module.exports = {
  find,
  add
};

function find() {
  return db('tasks');
}

function add(taskData) {
  return db('tasks')
    .insert(taskData)
    .then(([id]) => {
      return db('tasks').where('id', id).first();
    });
}
