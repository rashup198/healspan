const express = require('express');
const app = express();
const database = require("./config/database")
const profileRoutes = require('./routes/Profile');
const userRoutes = require("./routes/User");
const cookieParser = require('cookie-parser');



require('dotenv').config();



app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);


app.get('/', (req, res) => {
  res.send('Hello, world!');
});
// connecting the db
database.connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
