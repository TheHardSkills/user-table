const express = require('express');
const usersDb = require('../db/usersDb');

const jsonParser = express.json();
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    const results = await usersDb.all();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const results = await usersDb.one(req.params.id);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.post('/create', jsonParser, async (req, res) => { // delete 'create'
  try {
    usersDb.create(req.body);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Create');
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.get('/delete/:id', jsonParser, async (req, res) => {
  try {
    usersDb.delete(req.params.id);
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.send('Delete');
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = userRouter;
