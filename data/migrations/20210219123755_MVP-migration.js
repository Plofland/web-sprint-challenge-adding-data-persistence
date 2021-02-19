exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (table) => {
      table.increments('project_id');
      table.string('project_name', 32).notNullable();
      table.string('project_description', 128);
      table.boolean('project_completed').notNullable();
    })
    .createTable('resources', (table) => {
      table.increments('resource_id');
      table
        .string('resource_name', 32)
        .unique()
        .notNullable();
      table.string('resource_description', 64);
    })
    .createTable('tasks', (table) => {
      table.increments('task_id');
      table.string('task_description', 64).notNullable();
      table.string('task_notes', 128);
      table.boolean('task_completed').notNullable();
      table
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
