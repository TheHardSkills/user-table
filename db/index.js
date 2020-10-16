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
  .from('usersdb')
  .select('*')
  .then((rows) => rows)
  .catch((err) => err);

usersDb.one = (id) => knex
  .from('usersdb')
  .select('*')
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

usersDb.create = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  ip_address,
  car,
  company,
}) => knex
  .insert({
    id,
    first_name,
    last_name,
    email,
    gender,
    ip_address,
    car,
    company,
  })
  .into('usersdb')
  .then((rows) => rows)
  .catch((err) => err);

usersDb.delete = (id) => knex
  .from('usersdb')
  .delete()
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

module.exports = usersDb;
