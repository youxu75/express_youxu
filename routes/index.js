var express = require('express');
var router = express.Router();
const {getCate,getPostCate} = require('../controllers/cateController')


/* GET home page. */
router.get('/', getCate);
router.get('/getPostCate', getPostCate);

module.exports = router;
