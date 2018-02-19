exports.up = (knex, Promise) => {
  return knex.schema.createTable('speed1', table => {
    table.increments(); // id serial primary key
    table.string('speed1');
    table.text('books');
  });
};
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('speed1');
};
