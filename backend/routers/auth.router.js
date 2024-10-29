
const  { Router } = require('express');
const router = Router();
const authControllers = require('../controllers/auth.controller');
const { verifyLoginBody, verifyRegisterBody } = require('../middlewares/auth.middleware')

router.post('/login', verifyLoginBody, authControllers.login);
router.post('/login/register', verifyRegisterBody, authControllers.register);

module.exports = router;