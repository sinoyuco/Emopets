const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Like = require('../../models/Like');
const validateLike = require('../../validation/like');




router.get('/:id', (req, res) => {
    Like.findById(req.params.id)
        .then(like => res.json(like))
        .catch(err =>
            res.status(404).json({ nolikefound: 'No like found with that ID' })
        );
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLike(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        debugger;

        const newLike = new Like({
            liker: req.liker.id,
            liked: req.body.liked
        });

        newLike.save()
        .then(like => res.json(like))
        .catch(err => console.log(err));
    }
);

module.exports = router;

