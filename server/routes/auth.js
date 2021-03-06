const Router = require('express-promise-router');
const authController = require('../controllers/auth');
const router = new Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;
