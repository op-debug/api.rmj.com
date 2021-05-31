const { pelangganController } = require('../pelangganDependency');

const router = require('express').Router();

router.route('/').post(pelangganController.get)
router.route('/findone').post(pelangganController.findone)
router.route('/create').post(pelangganController.create)
router.route('/update').post(pelangganController.update)
router.route('/delete').post(pelangganController.delete)

module.exports.PelangganRouter = router;