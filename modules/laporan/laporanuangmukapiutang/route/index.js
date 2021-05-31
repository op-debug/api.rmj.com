const { penjualanController } = require('../penjualanDependency');

const router = require('express').Router();

router.route('/kalkulator/create')
  .post(penjualanController.CreateKalkulator)
router.route('/laporan')
  .post(penjualanController.getLaporan)

module.exports.PenjualanRouter = router;