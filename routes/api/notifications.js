const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Notification = require('../../models/Notification');


router.get('/', (req, res) => {
    Notification.find().then(notifs => res.json(notifs))
    .catch(err => res.status(404).json({ nonotifsfound: 'No notifications found'}))
});


module.exports = router;