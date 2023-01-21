const Users = require("../models/users.models");

// Obteniendo usuario por ID
class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password", "createAt", "updateAt"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  // Creando un usuario
  static async create(user) {
    try {
      const result = await Users.create(user);
      return result.toJSON();
    } catch (error) {
      throw error;
    }
  }
// Actualizando un usuario
  static async update(fields, id) {
    try {
      const result = await Users.update(fields, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
// Agregar curso
  static async addCourse(newCourse) {
    try {
      const { id, coursesId } = newCourse;
      const course = Courses.findByPk(coursesId);
      const user = Users.findByPk(id);
      if (user && course) {
        const result = await UserCourse.create(newCourse);
        return { isValid: true, result };
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
