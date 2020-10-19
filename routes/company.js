const express = require('express');
const companyDb = require('../db/companyDb');

const jsonParser = express.json();
const companyRouter = express.Router();

companyRouter.get('/', async (req, res) => {
  try {
    const results = await companyDb.all();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

companyRouter.get('/:id', async (req, res) => {
  try {
    const results = await companyDb.one(req.params.id);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

companyRouter.post('/create', jsonParser, async (req, res) => { // delete 'create'
  try {
    companyDb.create(req.body);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Create company');
  } catch (e) {
    res.sendStatus(500);
  }
});

companyRouter.get('/delete/:id', jsonParser, async (req, res) => {
  try {
    companyDb.delete(req.params.id);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Delete company');
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = companyRouter;
