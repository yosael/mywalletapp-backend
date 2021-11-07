const express = require('express');
const router = express.Router();
const { create, getExpensesReport } = require('../controllers/expense');

router.post('/expense', create);
router.get('/expensesReport/:userId', getExpensesReport);

module.exports = router;