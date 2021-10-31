const express = require('express');
const router = express.Router();
const { create } = require('../controllers/expense');

router.post('/expense', create);

module.exports = router;