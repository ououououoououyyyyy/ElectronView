import UserService from '../services/UserService.js';


class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message)
    }
  }

  async getAll(req, res){
    try {
      const users = await UserService.getAll();
      res.json(users)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async getOne(req, res){
    try {
      console.log(req.params);
      const user = await UserService.getOne(req.params.id)
      res.json(user)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async update(req, res){
    try {
      const user = req.body;
      console.log(user)
      const updatedUser = await UserService.update(user);
      res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async delete(req, res){
    try {
      const user = await UserService.delete(req.params.id)
      res.json(user);
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
}

export default new UserController();
