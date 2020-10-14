const express = require("express");
const db = require("../db");

const router = express.Router();
const jsonParser = express.json();

router.get("/", async (req, res) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let results = await db.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/create", jsonParser, async (req, res) => {
  console.log("req.body", req.body); //first_name
  console.log("req.body.first_name", req.body.first_name); //first_name

  try {
    db.create(req.body);
    res.send("Create");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/delete/:id", jsonParser, async (req, res) => {
  console.log("req.params.id", req.params.id); //first_name

  try {
    db.delete(req.params.id);
    res.send("Delete");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  //if(!req.body) return response.sendStatus(500);
});

module.exports = router;
