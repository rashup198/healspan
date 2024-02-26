const express = require('express');
const app = express();
const database = require("./config/database")
require('dotenv').config();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
// connecting the db

database.connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
