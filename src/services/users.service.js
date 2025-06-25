const { User } = require('../models/User.model');

const getAllUsers = () => User.findAll();
const getUserById = (id) => User.findByPk(id);
const createUser = (name) => User.create({ name });

const updateUser = async ({ id, name }) => {
  await User.update({ name }, { where: { id } });

  return getUserById(id);
};

const removeUser = (id) => User.destroy({ where: { id } });

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
};
