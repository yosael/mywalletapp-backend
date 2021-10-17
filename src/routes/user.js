const express = require('express');
const router = express.Router();
const { create,getAll } = require('../controllers/user');

router.get('/users', getAll);
router.post('/user', create);

module.exports = router;