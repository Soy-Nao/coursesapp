const UserServices = require('../services/users.services');


// Obtener usuario por ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// Creando un usuario
const createUser = async (req, res) => {
    try {
      const newUser = req.body;
      const result = await UserServices.create(newUser);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error.message)
    }
};

const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const field = req.body
      const result = await Users.update(field, {
        where: { id }
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message)
    }
  res.json({ message: "Actualizando un usuario" });
};

module.exports = {
  getUserById,
  createUser,
  updateUser,
};
