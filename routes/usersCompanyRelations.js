const express = require('express');
const usersCompanyRelationsDb = require('../db/usersCompanyRelationsDb');

const jsonParser = express.json();
const usersCompanyRelationsRouter = express.Router();

usersCompanyRelationsRouter.get('/', async (req, res) => {
  try {
    const results = await usersCompanyRelationsDb.all();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

usersCompanyRelationsRouter.get('/:id', async (req, res) => {
  try {
    const results = await usersCompanyRelationsDb.one(req.params.id);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

usersCompanyRelationsRouter.post('/create', jsonParser, async (req, res) => { // delete 'create'
  try {
    usersCompanyRelationsDb.create(req.body);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Create users_company data');
  } catch (e) {
    res.sendStatus(500);
  }
});

usersCompanyRelationsRouter.get('/delete/:id', jsonParser, async (req, res) => {
  try {
    usersCompanyRelationsDb.delete(req.params.id);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Delete users_company data');
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = usersCompanyRelationsRouter;
