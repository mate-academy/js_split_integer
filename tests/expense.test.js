'use strict';

const { createServer } = require('../src/createServer');
const { sequelize } = require('../src/db');
const axios = require('axios');
const https = require('https');
const {
  models: { User, Expense },
} = require('../src/models/models');
const { Agent } = require('http');

// this prevents `socket hang up` for Node.js 20.10+
axios.defaults.httpAgent = new Agent({ keepAlive: false });

describe('Expense', () => {
  let server;
  let serverInstance;
  let api;
  let user = null;
  let secondUser = null;

  const laptop = {
    spentAt: '2022-10-19T11:01:43.462Z',
    title: 'Buy a new laptop',
    amount: 999,
    category: 'Electronics',
    note: 'I need a new laptop',
  };

  const tv = {
    spentAt: '2022-10-19T11:01:43.462Z',
    title: 'Buy a new TV',
    amount: 999,
    category: 'Electronics',
    note: 'I need a new TV',
  };

  const HOST = 'http://localhost:7080/';

  beforeAll(async () => {
    await sequelize.sync({ force: true });

    api = axios.create({
      baseURL: HOST,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    [user, secondUser] = await Promise.all([
      User.create({ name: 'John Doe' }),
      User.create({ name: 'Jane Doe' }),
    ]);
  });

  beforeEach(async () => {
    server = createServer();

    serverInstance = server.listen(7080, () => {
      // eslint-disable-next-line no-console
      console.log(HOST);
    });

    await Expense.destroy({ truncate: true });
  });

  afterEach(async () => {
    if (serverInstance) {
      await serverInstance.close();
    }
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('createExpense', () => {
    it('should create a new expense', async () => {
      const data = {
        ...laptop,
        userId: user.id,
      };

      const response = await api.post('expenses', data);

      expect(response.status).toBe(201);

      expect(response.headers['content-type']).toBe(
        'application/json; charset=utf-8',
      );

      expect(response.data).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          ...data,
        }),
      );
    });

    it('should return 400 if required fields is not provided', async () => {
      expect.assertions(1);

      await api
        .post('/expenses', { note: 'Important note' })
        .catch((err) => expect(err.response.status).toBe(400));
    });

    // eslint-disable-next-line max-len
    it('should create a new expense if optional fields is not provided', async () => {
      const data = {
        spentAt: '2022-10-19T11:01:43.462Z',
        title: 'Buy a new laptop',
        amount: 999,
        userId: user.id,
      };

      const response = await api.post('/expenses', data);

      expect(response.data).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          ...data,
        }),
      );
    });

    it('should return 400 if user not found', async () => {
      expect.assertions(1);

      const data = {
        ...laptop,
        userId: 0,
      };

      await api
        .post('expenses', data)
        .catch((err) => expect(err.response.status).toBe(400));
    });
  });

  describe('getExpenses', () => {
    it('should return empty array if no expenses', async () => {
      const response = await api.get('expenses');

      expect(response.status).toBe(200);

      expect(response.data).toStrictEqual([]);
    });

    it('should return all expenses', async () => {
      const data = {
        ...tv,
        userId: user.id,
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      const response = await api.get('expenses');

      expect(response.data).toEqual([
        {
          id: expenseId,
          ...data,
        },
      ]);
    });

    it('should return all expenses for a user', async () => {
      const data = {
        ...laptop,
        userId: user.id,
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      await api.post('expenses', {
        ...data,
        userId: secondUser.id,
      });

      const response = await api.get(`expenses?userId=${user.id}`);

      expect(response.data).toEqual([
        {
          id: expenseId,
          ...data,
        },
      ]);
    });

    it('should return all expenses between dates', async () => {
      const data = {
        ...tv,
        userId: user.id,
      };

      const seconData = {
        ...laptop,
        userId: user.id,
        spentAt: '2022-10-20T11:01:43.462Z',
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      const {
        data: { id: secondExpenseId },
      } = await api.post('expenses', { ...seconData });

      const response = await api
        // eslint-disable-next-line max-len
        .get(
          'expenses?&from=2022-10-19T11:01:43.462Z&to=2022-10-20T11:01:43.462Z',
        );

      expect(response.data).toEqual([
        {
          id: expenseId,
          ...data,
        },
        {
          id: secondExpenseId,
          ...seconData,
        },
      ]);
    });

    it('should return all expenses by category', async () => {
      const data = {
        ...laptop,
        userId: user.id,
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      await api.post('/expenses', {
        ...data,
        category: 'Food',
      });

      const response = await api.get(
        `expenses?userId=${user.id}&categories=Electronics`,
      );

      expect(response.data).toEqual([
        {
          id: expenseId,
          ...data,
        },
      ]);
    });
  });

  describe('getExpense', () => {
    it('should return expense', async () => {
      const data = {
        ...tv,
        userId: user.id,
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      const response = await api.get(`expenses/${expenseId}`);

      expect(response.data).toEqual({
        id: expenseId,
        ...data,
      });
    });

    it('should return 404 if expense not found', async () => {
      expect.assertions(1);

      await api
        .get('expenses/1')
        .catch((err) => expect(err.response.status).toBe(404));
    });
  });

  describe('updateExpense', () => {
    it('should update expense', async () => {
      const data = {
        ...laptop,
        userId: user.id,
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      const response = await api.patch(`expenses/${expenseId}`, {
        title: 'Buy a new TV',
      });

      expect(response.data).toEqual({
        id: expenseId,
        ...data,
        title: 'Buy a new TV',
      });
    });

    it('should return 404 if expense not found', async () => {
      expect.assertions(1);

      await api.patch('expenses/1', laptop).catch((err) => {
        expect(err.response.status).toBe(404);
      });
    });
  });

  describe('deleteExpense', () => {
    it('should delete expense', async () => {
      expect.assertions(2);

      const data = {
        ...tv,
        userId: user.id,
      };

      const {
        data: { id: expenseId },
      } = await api.post('expenses', data);

      const res = await api.delete(`expenses/${expenseId}`);

      expect(res.status).toBe(204);

      await api.get(`expenses/${expenseId}`).catch((err) => {
        expect(err.response.status).toBe(404);
      });
    });

    it('should return 404 if expense not found', async () => {
      await api.delete('expenses/1').catch((err) => {
        expect(err.response.status).toBe(404);
      });
    });
  });
});
