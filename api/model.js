const db = require('../data/dbConfig');

module.exports = {
    get,
    insert
}
const mappers = require('../data/mappers');

function get(id) {
    let query = db('car');
  
    if (id) {
      return query
        .where('id', id)
        .first()
        .then((action) => {
          if (action) {
            return mappers.actionToBody(action);
          } else {
            return null;
          }
        });
    } else {
      return query.then((actions) => {
        return actions.map((action) => mappers.actionToBody(action));
      });
    }
  }
  function getById(id) {
    return db('car')
      .insert({"name": "wow","description": "B!",
  "completed": false
    })
      .where({ id })
      .first();
  }
  
  function insert(action) {
    return db('car')
    .insert(action)
    .then(a => {return get(a)})
  }