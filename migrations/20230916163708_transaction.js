exports.up = function (knex) {
    return knex.schema.createTable("transaction", (table) => {
      table.uuid("id").primary();
      table
        .uuid("user_id")
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .uuid("product_id")
        .references("product.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("total").notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("transaction");
  };
  