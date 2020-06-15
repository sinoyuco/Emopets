const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const db = require('./config/keys').mongoURI;

// this is a test
// another test
app.get("/", (req, res) => res.send("Hello World!!!"));

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));