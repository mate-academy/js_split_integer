const expensesService = require('../services/expenses.service');
const usersService = require('../services/users.service');

const get = async (req, res) => {
  const expenses = await expensesService.getAllExpenses(req.query);

  res.status(200).json(expenses);
};

const getOne = async (req, res) => {
  const { id } = req.params;

  const expense = await expensesService.getExpenseById(id);

  if (!expense) {
    return res.sendStatus(404);
  }

  res.status(200).json(expense);
};

const create = async (req, res) => {
  const expenseData = req.body;
  const user = await usersService.getUserById(expenseData.userId);

  if (!user) {
    return res.sendStatus(400);
  }

  const newExpense = await expensesService.createExpense(expenseData);

  res.status(201).json(newExpense);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const expense = await expensesService.getExpenseById(id);

  if (!expense) {
    return res.sendStatus(404);
  }

  await expensesService.removeExpense(id);
  res.sendStatus(204);
};

const update = async (req, res) => {
  const { id } = req.params;
  const updated = await expensesService.updateExpense(id, req.body);

  if (!updated) {
    return res.sendStatus(404);
  }

  res.status(200).json(updated);
};

module.exports = {
  get,
  getOne,
  create,
  remove,
  update,
};
