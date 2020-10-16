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

const UsersCompanyRelations = {};
UsersCompanyRelations.all = () => knex
  .from('UsersCompanyRelations')
  .select('*')
  .then((rows) => rows)
  .catch((err) => err);

UsersCompanyRelations.one = (id) => knex
  .from('UsersCompanyRelations')
  .select('*')
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

UsersCompanyRelations.create = ({
  userId,
  companyId,
}) => knex
  .insert({
    userId,
    companyId,
  })
  .into('UsersCompanyRelations')
  .then((rows) => rows)
  .catch((err) => err);

UsersCompanyRelations.delete = (id) => knex
  .from('UsersCompanyRelations')
  .delete()
  .where('id', '=', `${id}`)
  .then((rows) => rows)
  .catch((err) => err);

module.exports = UsersCompanyRelations;
