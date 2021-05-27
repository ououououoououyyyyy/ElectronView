import {validationResult} from 'express-validator';

export function ValidateRequest(req, res, next) {
  const errors = validationResult(req);
  console.log(errors, 'there');
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  next();
}
