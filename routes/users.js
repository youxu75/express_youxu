var express = require('express');
var router = express.Router();
const {sendCode,codePhoneLogin} = require('../controllers/UserController');

/* GET users listing. */
router.post('/sendCode',sendCode);
router.post('/codePhoneLogin',codePhoneLogin);


module.exports = router;


