import User from '../models/User.js';

class UserService {
  async create(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async getAll() {
    const users = await User.find(Boolean);
    return users;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('!id');
    }
    const user = await User.findById(id);
    return user;
  }

  async getOneByEmail(email) {
    if (!email) {
      throw new Error('!email');
    }
    const user = await User.findOne({email})
    return user;
  }

  async update(user) {
    if (!user._id) {
      throw new Error('!id')
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true});
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error('!id');
    }
    const user = await User.findByIdAndRemove(id)
    return user;
  }
}

export default new UserService();
