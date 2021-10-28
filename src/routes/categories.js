const express = require('express');
const { getAll } = require('../controllers/categories');

const router = express.Router();

router.get('/categories', getAll);

module.exports = router;