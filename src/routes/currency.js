const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/currency');

router.get('/currencies', getAll);

module.exports = router;