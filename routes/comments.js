const express = require('express');
const router = express.Router();
const commentsCtl = require('../controllers/comments');

router.get('/comments/:id/edit', commentsCtl.edit)

router.post('/posts/:id/comments', commentsCtl.create);

router.delete('/posts/:id/comments/:commentId', commentsCtl.remove);

router.put('/comments/:id', commentsCtl.update);

module.exports = router;