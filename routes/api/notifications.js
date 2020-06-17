const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Notification = require('../../models/Notification');


// router.post('/:id',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         // const { errors, isValid } = validateLike(req.body);

//         // if (!isValid) {
//         //     return res.status(400).json(errors);
//         // }

//         const newNotification = new Notification({
//             user: req.user.id,
//             message: req.body.message
//         });

//         newLike.save()
//             .then(like => res.json(like))
//             .catch(err => console.log(err));
//     }
// );


module.exports = router;