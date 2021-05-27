import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import config from 'config';

import UserService from '../services/UserService.js';

class AuthController {
  async registration(req, res) {
    console.log(req.body);
    try {
      const {email, username, password} = req.body;

      const candidate = await UserService.getOneByEmail(email);
      debugger;

      if (candidate) {
        res.status(400).json({message: `User with email ${email} already exist`})
      }

      const hashPassword = await bcrypt.hash(password, 15);
      const user = {email, username, password: hashPassword};
      const createdUser = await UserService.create(user);
      delete user.password;
      return res.json({message: 'User created', user: createdUser});
    } catch (e) {
      console.log(e);
      res.send({message: 'Server error'});
    }
  }

  async login(req, res) {
    const {email, password} = req.body;
    try {
      const user = await UserService.getOneByEmail(email);
      if (!user) {
        return res.status(400).json({message: 'User not exist'});
      }

      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({message: 'Wrong password'});
      }

      const payload = {
        user: {
          id: user.id,
        }
      };

      jwt.sign(
          payload,
          config.get('jwtKey'),
          {
            expiresIn: 60 * 60,
          },
          (err, token) => {
            if (err) {
              throw err
            }
            ;
            res.status(200).json({token});
          }
      )
    } catch (e) {
      console.error(e);
      res.status(500).json({message: "Server Error"})
    }
  }
}

export default new AuthController();
