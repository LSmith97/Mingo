const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const usersCtl = require('../controllers/users')

router.get('/:id', usersCtl.show);

module.exports = router;
