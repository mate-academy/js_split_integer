/* eslint-disable no-console */
'use strict';

const axios = require('axios');
const https = require('https');

const {
  models: { User },
} = require('../src/models/models');
const { createServer } = require('../src/createServer');
const { sequelize } = require('../src/db');
const { Agent } = require('http');

// this prevents `socket hang up` for Node.js 20.10+
axios.defaults.httpAgent = new Agent({ keepAlive: false });

describe('User', () => {
  let server;
  let serverInstance;
  let api;

  const HOST = 'http://localhost:7080/';

  beforeAll(async () => {
    try {
      await sequelize.sync({ force: true });
    } catch (err) {
      console.log(err);
    }

    api = axios.create({
      baseURL: HOST,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }, 7000);

  beforeEach(async () => {
    server = createServer();

    serverInstance = server.listen(7080, () => {
      console.log(HOST);
    });

    await User.destroy({ truncate: true });
  });

  afterEach(async () => {
    if (serverInstance) {
      await serverInstance.close();
    }
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const name = 'John Doe';

      const res = await api.post('users', { name });

      expect(res.status).toBe(201);

      expect(res.headers['content-type']).toBe(
        'application/json; charset=utf-8',
      );

      expect(res.data).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name,
        }),
      );
    });

    it('should return 400 if name is not provided', async () => {
      expect.assertions(1);

      await api
        .post('users')
        .catch((err) => expect(err.response.status).toBe(400));
    });
  });

  describe('getUsers', () => {
    it('should return empty array if no users', async () => {
      const response = await api.get('users');

      expect(response.status).toBe(200);

      expect(response.headers['content-type']).toBe(
        'application/json; charset=utf-8',
      );

      expect(response.data).toEqual([]);
    });

    it('should return all users', async () => {
      const users = [
        {
          name: 'John Doe',
        },
        {
          name: 'Jane Doe',
        },
      ];

      const createdUsers = await Promise.all(
        users.map(async (user) => {
          const res = await api.post('users', user);

          return res.data;
        }),
      );

      const response = await api.get('users');

      expect(response.status).toBe(200);

      expect(response.headers['content-type']).toBe(
        'application/json; charset=utf-8',
      );

      expect(response.data).toEqual(expect.arrayContaining(createdUsers));
    });
  });

  describe('getUser', () => {
    it('should return 404 if user does not exist', async () => {
      expect.assertions(1);

      await api
        .get('users/1')
        .catch((err) => expect(err.response.status).toBe(404));
    });

    it('should return user', async () => {
      const { data: createdUser } = await api.post('users', {
        name: 'John Doe',
      });

      const response = await api.get(`users/${createdUser.id}`);

      expect(response.status).toBe(200);

      expect(response.headers['content-type']).toBe(
        'application/json; charset=utf-8',
      );

      expect(response.data).toEqual(createdUser);
    });
  });

  describe('updateUser', () => {
    it('should return 404 if user does not exist', async () => {
      expect.assertions(1);

      await api
        .put('users/1', { name: 'John Doe' })
        .catch((err) => expect(err.response.status).toBe(404));
    });

    it('should update user', async () => {
      const { data: createdUser } = await api.post('/users', {
        name: 'John Doe',
      });

      const response = await api.patch(`users/${createdUser.id}`, {
        name: 'Jane Doe',
      });

      expect(response.status).toBe(200);

      expect(response.headers['content-type']).toBe(
        'application/json; charset=utf-8',
      );

      expect(response.data).toEqual({
        ...createdUser,
        name: 'Jane Doe',
      });
    });
  });

  describe('deleteUser', () => {
    it('should return 404 if user does not exist', async () => {
      expect.assertions(1);

      await api
        .delete('users/1')
        .catch((err) => expect(err.response.status).toBe(404));
    });

    it('should delete user', async () => {
      const createdUser = await api.post('users', { name: 'John Doe' });

      const res = await api.delete(`users/${createdUser.data.id}`);

      expect(res.status).toBe(204);

      await api
        .get(`users/${createdUser.data.id}`)
        .catch((err) => expect(err.response.status).toBe(404));
    });
  });
});
