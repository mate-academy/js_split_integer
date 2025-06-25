const userService = require('../services/users.service');

const get = async (_, res) => {
  const users = await userService.getAllUsers();

  res.status(200).json(users);
};

const getOne = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getUserById(id);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
};

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  }

  const newUser = await userService.createUser(name);

  res.status(201).json(newUser);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  if (!user) {
    return res.sendStatus(404);
  }

  await userService.removeUser(id);
  res.sendStatus(204);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (typeof name !== 'string' || !name) {
    return res.sendStatus(400);
  }

  const user = await userService.getUserById(id);

  if (!user) {
    return res.sendStatus(404);
  }

  const updated = await userService.updateUser({ id, name });

  res.status(200).json(updated);
};

module.exports = {
  get,
  getOne,
  create,
  remove,
  update,
};
