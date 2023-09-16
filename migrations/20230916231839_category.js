exports.up = function (knex) {
    return knex.schema.createTable("category", (table) => {
      table.uuid("id").primary();
      table.string("category_name").notNullable();
      table.string("category_image").notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("category");
  };
  