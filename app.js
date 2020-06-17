const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const likes = require("./routes/api/likes");
const notifications = require("./routes/api/notifications");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');



app.get("/", (req, res) => res.send("Hello World!!!"));

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/likes", likes);
app.use("/api/notifications", notifications);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
