const express = require('express');
const controller = require('../controllers/expenses.controller');

const router = express.Router();

router.route('/').get(controller.get).post(controller.create);

router
  .route('/:id')
  .get(controller.getOne)
  .patch(controller.update)
  .delete(controller.remove);

module.exports = router;
