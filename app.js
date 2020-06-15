const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


// this is a test
// another test
app.get("/", (req, res) => res.send("Hello ownprops!!!"));



const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));