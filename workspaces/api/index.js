const express = require('express');
const app = express();
const port = 3000;

const values = [];

app.get('/', (req, res) => {
  values.push(Date.now());
  res.send({ values });
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
})