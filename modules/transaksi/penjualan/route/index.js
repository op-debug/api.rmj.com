const { penjualanController } = require('../penjualanDependency');

const router = require('express').Router();

router.route('/kalkulator/create')
  .post(penjualanController.CreateKalkulator)
router.route('/')
  .post(penjualanController.getData)

module.exports.PenjualanRouter = router;