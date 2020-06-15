const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const likes = require("./routes/api/likes");
const bodyParser = require('body-parser');
const passport = require('passport');



app.get("/", (req, res) => res.send("Hello World!!!"));

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/likes", likes);

const port = process.env.PORT || 5003;

app.listen(port, () => console.log(`Server is running on port ${port}`));
