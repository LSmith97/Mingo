const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');

/* GET users listing. */
router.get('/', postCtl.index);
router.get('/:id', postCtl.show);
router.get('/new', postCtl.new);
router.post('/', postCtl.create);

module.exports = router;
