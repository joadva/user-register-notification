import { Op } from "sequelize";
import User from "src/database/models/User";
export class UserService {
  async getUsers(dataQuery): Promise<User[]> {
    const filter = {};

    if (dataQuery && dataQuery.first_name) {
      filter.first_name = {
        [Op.like]: `%${dataQuery.first_name}%`,
      };
    }
    if (dataQuery && dataQuery.age) {
      filter.age = parseInt(dataQuery.age);
    }

    const users = await User.findAll({
      where: filter,
    });

    return users;
  }

  async createUser(data: Partial<User>) {
    const newUser = await User.create(data);
    return newUser;
  }

  async getUser(id: string): Promise<User> {
    const user = await User.findByPk(id);
    return user;
  }

  async updateUser(id: string, data: Partial<User>) {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user;
    }
    return;
  }

  async deleteUser(id: string) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
    return;
  }
}
