const { brandController } = require('../brandDependency');

const router = require('express').Router();

router.route('/').post(brandController.get)
router.route('/findone').post(brandController.findone)
router.route('/create').post(brandController.create)
router.route('/update').post(brandController.update)
router.route('/delete').post(brandController.delete)

module.exports.BrandRouter = router;