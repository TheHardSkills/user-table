const express = require('express');
const db = require('../db');

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    const results = await db.all();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.get('/:id', async (req, res) => {
  try {
    const results = await db.one(req.params.id);
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.post('/create', async (req, res) => { // delete 'create'
  try {
    db.create(req.body);
    res.send('Create');
  } catch (e) {
    res.sendStatus(500);
  }
});

userRouter.get('/delete/:id', async (req, res) => {
  try {
    db.delete(req.params.id);
    res.send('Delete');
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = userRouter;
