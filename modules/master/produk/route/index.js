const { produkController } = require('../produkDependency');

const router = require('express').Router();

router.route('/').post(produkController.get)
router.route('/findone').post(produkController.findone)
router.route('/create').post(produkController.create)
router.route('/update').post(produkController.update)
router.route('/delete').post(produkController.delete)

module.exports.ProdukRouter = router;