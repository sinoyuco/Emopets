const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Like = require('../../models/Like');
const validateLike = require('../../validation/like');


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLike(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newLike = new Like({
            liker: req.body.liker,
            liked: req.body.liked
        });

        newLike.save().then(like => res.json(like));
    }
);

module.exports = router;

