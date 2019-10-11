exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();
      tbl.text("description");
      tbl.boolean("completed").defaultTo(0);
    })
    .createTable("task", tbl => {
      tbl.increments();

      tbl.text("description").notNullable();
      tbl.text("note");
      tbl.boolean("completed").defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project");
    })
    .createTable("resource", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();
      tbl.text("description");
    });
};

exports.down = function(knex) {
  return knex.scheme.dropTableIfExists();
};
