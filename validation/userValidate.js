const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function userValidate(data) {
  let errors = {};

  data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.address = !isEmpty(data.address) ? data.address : '';

  if (!Validator.isLength(data.first_name, { min: 2, max: 20 })) {
    errors.name = 'First Name must be between 2 and 20 characters';
  }
  if (Validator.isEmpty(data.first_name)) {
    errors.name = 'First Name field is required';
  }

  if (!Validator.isLength(data.last_name, { min: 2, max: 20 })) {
    errors.name = 'Last Name must be between 2 and 20 characters';
  }
  if (Validator.isEmpty(data.last_name)) {
    errors.name = 'Last Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.address)) {
    errors.name = 'Address field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
