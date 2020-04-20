const express = require("express");
const app = express();
const store = require('./store');

app.get('/', (req, res) => {
  res.json({msg:"welcome"});
})
app.use('/store', store);

module.exports = app;