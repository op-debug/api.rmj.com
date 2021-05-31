const { satuanController } = require('../satuanDependency');

const router = require('express').Router();

router.route('/').post(satuanController.get)
router.route('/findone').post(satuanController.findone)
router.route('/create').post(satuanController.create)
router.route('/update').post(satuanController.update)
router.route('/delete').post(satuanController.delete)

module.exports.SatuanRouter = router;