const { Expense } = require('../models/Expense.model');
const { buildExpenseFilter } = require('../utils/buildExpenseFilter');

const getAllExpenses = (filter) => {
  return Expense.findAll({ where: buildExpenseFilter(filter) });
};

const getExpenseById = (id) => Expense.findByPk(id);
const createExpense = (data) => Expense.create(data);

const updateExpense = async (id, data) => {
  await Expense.update(data, { where: { id } });

  return getExpenseById(id);
};

const removeExpense = (id) => Expense.destroy({ where: { id } });

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  removeExpense,
};
