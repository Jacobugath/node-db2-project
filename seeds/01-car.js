
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {
          vin: '1',
          make: 'Ford',
          model: 'Mustang',
          milage: '0'
        },
      ]);
    });
};
