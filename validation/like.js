const Validator = require('validator');

module.exports = function validateLike(data) {
    let errors = {};

    // data.liker = validText(data.email) ? data.email : '';
    // data.password = validText(data.password) ? data.password : '';

    if (Validator.isEmpty(data.liker)) {
        errors.liker = 'A liker is required';
    }

    if (Validator.isEmpty(data.liked)) {
        errors.liked = 'A liked is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};