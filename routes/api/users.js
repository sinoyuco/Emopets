const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User'); 
const keys = require('../../config/keys');
const passport = require('passport');


// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');

// router.post("/register", (req, res) => {
//     const { errors, isValid } = validateRegisterInput(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             errors.handle = "User already exists";
//             return res.status(400).json(errors);
//         } else {
//             const newUser = new User({
//                 name: req.body.name, 
//                 email: req.body.email,
//                 password: req.body.password,
//                 language: req.body.language,
//                 goal: req.body.goal,
//                 experience: req.body.experience,
//                 birthDate: req.body.birthDate,
//                 pronouns: req.body.pronouns
//             });

//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     newUser.password = hash;
//                     newUser
//                         .save()
//                         .then(user => {
//                             const payload = { 
//                                 id: user.id, 
//                                 email: user.email 
//                             };

//                             jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
//                                 res.json({
//                                     success: true,
//                                     token: "Bearer " + token
//                                 });
//                         })
//                         .catch(err => console.log(err));
//                 });
//             });
//         }
//     });
// });

// router.post("/login", (req, res) => {
//     const { errors, isValid } = validateLoginInput(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const email = req.body.email;
//     const password = req.body.password;

//     User.findOne({ email }).then(user => {
//         if (!user) {
//             errors.email = 'Email is invalid';
//             return res.status(400).json(errors);
//         }

//         bcrypt.compare(password, user.password).then(isMatch => {
//             if (isMatch) {
//                 const payload = { id: user.id, email: user.email };

//                 jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
//                     res.json({
//                         success: true,
//                         token: "Bearer " + token
//                     });
//                 });
//             } else {
//                 errors.password = "Incorrect password";
//                 return res.status(400).json(errors);
//             }
//         });
//     });
// });

// router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.json({
//         id: req.user.id,
//         email: req.user.email
//     });
// })

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;