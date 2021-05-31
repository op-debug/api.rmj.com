const { authController } = require('../authDependency');

const router = require('express').Router();



router.route('/')
  .post(authController.auth);
router.route('/forgot')
  .post(authController.forgot);
router.route('/create')
  .post(authController.create);  
router.route('/aktifasi')
  .get(authController.aktifasi);    

module.exports.AuthRouter = router;