exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").primary();
    table.string("user_name").notNullable();
    table.string("user_email").notNullable();
    table.string("user_pronouns").notNullable();
    table.string("contact_phone").notNullable();
    table.text("name_pronunciation").notNullable();
    table.string("user_icon").collate('utf8mb4_unicode_ci').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
