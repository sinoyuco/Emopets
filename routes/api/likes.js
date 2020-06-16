const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Like = require('../../models/Like');
const Notification = require('../../models/Notification');
const validateLike = require('../../validation/like');

router.get('/', (req, res) => {
    Like.find()
        .then(likes => res.json(likes))
        .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
});


router.get('/:id', (req, res) => {
    
    Like.findById(req.params.id)
        .then(like => res.json(like))
        .catch(err =>
            res.status(404).json({ nolikefound: 'No like found with that ID' })
        );
});


router.post('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLike(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const matchingLikesArr = [];
        const el = Like.find({user: req.params.id, liked: req.user.id}).then((likes) => matchingLikesArr.push(likes))
        console.log(matchingLikesArr);

        const newLike = new Like({
            user: req.user.id,
            liked: req.params.id
        });

        newLike.save()
        .then(like => res.json(like))
        .catch(err => console.log(err));
    }
);

module.exports = router;

