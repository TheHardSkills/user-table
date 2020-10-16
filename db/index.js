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
  .from('Users')
  .select('*')
  .then((rows) => rows)
  .catch((err) => err);

usersDb.one = (id) => knex
  .from('Users')
  .select('*')
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

usersDb.create = ({
  firstName,
  lastName,
  email,
  gender,
  car,
  company,
}) => knex
  .insert({
    firstName,
    lastName,
    email,
    gender,
    car,
    company,
  })
  .into('Users')
  .then((rows) => rows)
  .catch((err) => err);

usersDb.delete = (id) => knex
  .from('Users')
  .delete()
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

module.exports = usersDb;
