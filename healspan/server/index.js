const express = require('express');
const app = express();
const database = require("./config/database")
const profileRoutes = require('./routes/Profile');
const userRoutes = require("./routes/User");
const claimRoutes = require("./routes/Claim");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');



require('dotenv').config();
database.connect();
cloudinaryConnect();

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp'
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/claim",claimRoutes);


app.get('/', (req, res) => {
  res.send('Hello, world!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
