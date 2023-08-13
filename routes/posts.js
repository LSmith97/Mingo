const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');

/* GET users listing. */
router.get('/', postCtl.index);

module.exports = router;
