const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const multer = require("multer");
const upload = multer()

/* GET users listing. */
router.get('/', postCtl.index);

router.get('/new', ensureLoggedIn, postCtl.new);

router.get('/:id/edit', ensureLoggedIn, postCtl.edit);

router.get('/:id', postCtl.show);

router.post('/', ensureLoggedIn, upload.single("imageUpload"), photosCtrl.uploadPhoto, postCtl.create);

router.delete('/:id', ensureLoggedIn, postCtl.remove);

router.put('/:id', ensureLoggedIn, postCtl.update);



module.exports = router;
