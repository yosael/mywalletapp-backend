const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/accountType');


router.get('/accountTypes',getAll);

module.exports = router;