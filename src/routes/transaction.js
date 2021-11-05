const express = require('express');
const router = express.Router();
const { getAllByUser } = require('../controllers/transaction');

router.get('/transactions/:userId', getAllByUser);

module.exports = router;