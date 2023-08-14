const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');

/* GET users listing. */
router.get('/', postCtl.index);
router.get('/new', postCtl.new);
router.get('/:id', postCtl.show);
router.post('/', postCtl.create);
router.delete('/:id', postCtl.remove);
module.exports = router;
