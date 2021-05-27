import {body, check} from 'express-validator';


export const registrationValidator = [
  body('username')
      .not()
      .isEmpty()
      .withMessage('Please Enter a valid Username'),
  body('email')
      .isEmail()
      .withMessage('Please Enter a valid Email'),
  body('password')
      .isLength({min: 3, max: 12})
      .withMessage('Password must be longer then 3 and shorter than 12'),
];

export const loginValidator = [
  body('email')
      .isEmail()
      .withMessage('Please Enter a valid Email'),
  body('password')
      .isLength({min: 3, max: 12})
      .withMessage('Password must be longer then 3 and shorter than 12'),
]
