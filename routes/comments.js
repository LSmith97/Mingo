const express = require('express');
const router = express.Router();
const commentsCtl = require('../controllers/comments');


router.post('/posts/:id/comments', commentsCtl.create);
router.delete('/posts/:id/comments/:commentId', commentsCtl.remove);

module.exports = router;