exports.up = function(knex) {
  return knex.schema
    //Users Table
    .createTable('users', tbl => {
      tbl.increments(); //auto creates a primary key for a table as "id"
      tbl.text('username', 128)
        .unique()
        .notNullable();
    })
    
    //Posts table
    .createTable('posts', tbl => {
      tbl.increments();
      tbl.text('contents');

      //Foreign key
      tbl.integer('user_id') // the foreign key must be the same type as the primary key it references
        .unsigned() //always include .unsigned() when referencing an integer primary key //starts the integer at 0
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') //what happens if value of primary key changes
        .onDelete('CASCADE'); //what happens if the primary key table row is deleted
        // RESTRICT, DO NOTHING, SET NULL, CASCADE
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('users');
};
