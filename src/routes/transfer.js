const express = require('express');
const router = express.Router();
const { create } = require('../controllers/transfer');

router.post('/transfer', create);

module.exports = router;