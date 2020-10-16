const options = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'yulia',
    password: '1',
    database: 'test',
  },
};

const knex = require('knex')(options);

const usersDb = {};
usersDb.all = () => knex
  .from('Company')
  .select('*')
  .then((rows) => rows)
  .catch((err) => err);

usersDb.one = (id) => knex
  .from('Company')
  .select('*')
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

usersDb.create = ({
  companyName,
  companyLocation,
}) => knex
  .insert({
    companyName,
    companyLocation,
  })
  .into('Company')
  .then((rows) => rows)
  .catch((err) => err);

usersDb.delete = (id) => knex
  .from('Company')
  .delete()
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

module.exports = usersDb;
