'use strict';

const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users.routes');
const expensesRoutes = require('./routes/expenses.routes');

function createServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use('/users', usersRoutes);
  app.use('/expenses', expensesRoutes);

  return app;
}

module.exports = { createServer };
