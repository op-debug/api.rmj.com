const { menuController } = require('../menuDependency');

const router = require('express').Router();

router.route('/').post(menuController.get)
router.route('/findone').post(menuController.findone)
router.route('/create').post(menuController.create)
router.route('/update').post(menuController.update)
router.route('/delete').post(menuController.delete)

module.exports.MenuRouter = router;