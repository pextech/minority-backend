import Joi from 'joi';
import joiPhone from 'joi-phone-number';

const customJoi = Joi.extend(joiPhone);

// ================ Account scheama =========================
export const accountSchema = Joi.object({
  fullName: Joi.string().trim().min(2).required().messages({
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

// ================ Login scheama =========================
export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be a valid email',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is not allowed to be empty',
  }),
}).options({ abortEarly: false });

// ================ Password scheama =========================
export const passwordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be a valid email',
  }),
  password: Joi.string()
    .required()
    .regex(
      /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/,
    )
    .messages({
      'any.required': 'Password is a required field',
      'string.empty': 'Password is not allowed to be empty',
      'string.pattern.base':
        'Password must be at least 8 characters long with a number, Upper and lower cases, and a special character',
    }),
}).options({ abortEarly: false });
