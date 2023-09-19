exports.up = function (knex) {
  return knex.schema.createTable("product", (table) => {
    table.uuid("id").primary();
    table.string("product_name").notNullable();
    table.string("product_price").notNullable();
    table.integer("product_online_stock").notNullable();
    table.integer("product_inshop_stock").notNullable();
    table.string('category').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product");
};
