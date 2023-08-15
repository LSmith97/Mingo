const express = require('express');
const router = express.Router();
const commentsCtl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/comments/:id/edit', ensureLoggedIn, commentsCtl.edit)

router.post('/posts/:id/comments', ensureLoggedIn, commentsCtl.create);

router.delete('/posts/:id/comments/:commentId', ensureLoggedIn, commentsCtl.remove);

router.put('/comments/:id', ensureLoggedIn, commentsCtl.update);

module.exports = router;