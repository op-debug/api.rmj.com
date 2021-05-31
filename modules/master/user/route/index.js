const { userController } = require('../userDependency');

const router = require('express').Router();


router.route('/')
  .post(userController.getAll);
router.route('/create')
  .post(userController.create);
router.route('/delete')
  .post(userController.delete);
router.route('/update')
  .post(userController.update);
router.route('/search')
  .post(userController.search);
  

module.exports.UserRouter = router;