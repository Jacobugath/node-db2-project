
exports.up = function(knex) {
  return knex.schema.createTable('car', tbl =>{
      tbl.increments();
      tbl.text('vin')
      .notNullable()
      .unique();
      tbl.text('make')
      .notNullable();
      tbl.text('model')
      .notNullable();
      tbl.text('milage')
      .notNullable();
      tbl.text('transmission');  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car');
};
