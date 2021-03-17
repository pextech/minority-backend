import Joi from 'joi';
import joiPhone from 'joi-phone-number';
import handleErrorsUtil from '../../../utils/handle-errors.util';

const customJoi = Joi.extend(joiPhone);

const editValidUser = (req, res, next) => {
  const schema = Joi.object({
    fullname: Joi.string().required().messages({
      'any.required': 'Full Name is required',
      'string.empty': 'Full Name is not allowed to be empty',
      'string.min':
        'Full Name length must be at least 2 characters long',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
      'string.email': 'Email must be a valid email',
    }),
  }).options({ abortEarly: false });
  return handleErrorsUtil(schema, req.body, res, next);
};

export default editValidUser;
